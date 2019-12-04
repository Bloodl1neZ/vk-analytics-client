import React, {Component} from 'react';
import AnalyseView from "./AnalyseView";
import VkUserService from "../service/vk/VkUserService";

class AnalyseContainer extends Component {
    constructor(props) {
        super(props);
        this.timeout = 0;
    }

    state = {
        settings: {
            photos: 5,
            posts: 5,
        },
        user: {
            id: 1,
        }
    };

    componentDidMount() {
        const {id} = this.state.user;
        this.loadUser(id)
            .then(() => this.loadFriends(id))
            .catch(() => {
                    this.setState(prev => ({
                        user: {
                            ...prev.user,
                            error: "Пользователь не найден"
                        }
                    }))
                }
            );
    }

    handleAnalyse = () => {
        console.log("analyse");
    };

    areSettingsValid = () => {
        const {settings} = this.state;
        return settings.photos >= 0 || settings.posts >= 0;
    };

    handlePhotosChange = event => {
        const {value} = event.target;
        this.setState((prev) => ({
                settings: {
                    ...prev.settings,
                    photos: value,
                },
                estimation: this.calculateEstimation(prev.user.friends, prev.settings.posts, value)
            })
        );
    };

    handlePostsChange = event => {
        const {value} = event.target;
        this.setState((prev) => ({
                settings: {
                    ...prev.settings,
                    posts: value,
                },
                estimation: this.calculateEstimation(prev.user.friends, value, prev.settings.photos)
            })
        );
    };

    handleUserIdChange = event => {
        const {value: id} = event.target;
        this.setState(prev => ({
            user: {
                ...prev.user,
                id,
            }
        }));
        if (!this.isUserIdValid(id)) {
            return;
        }
        if (this.timeout) {
            clearTimeout(this.timeout)
        }
        this.timeout = setTimeout(() => {
            this.loadUser(id)
                .then(() => this.loadFriends(id))
                .catch(() => {
                        this.setState(prev => ({
                            user: {
                                ...prev.user,
                                error: "Пользователь не найден"
                            }
                        }))
                    }
                );
        }, 500)
    };

    loadUser = id => {
        return VkUserService.getUserById(id)
            .then(user => {
                    console.log(user);
                    this.setState({
                        user
                    });
                }
            );
    };

    loadFriends = id => {
        return VkUserService.getFriendsAmountById(id)
            .then(friends => {
                this.setState(prev => {
                    return ({
                        user: {
                            ...prev.user,
                            friends,
                        },
                        estimation: this.calculateEstimation(friends, prev.settings.posts, prev.settings.photos)
                    });
                });
            })
    };

    calculateEstimation = (friends, posts, photos) => {
        return parseInt(friends * (photos + posts) * 0.5 / 60);
    };

    isUserIdValid = id => {
        return id > 0
    };

    render() {
        const {user, settings, estimation} = this.state;
        return (
            <AnalyseView onPhotosChange={this.handlePhotosChange}
                         onPostsChange={this.handlePostsChange}
                         onUserIdChange={this.handleUserIdChange}
                         settings={settings} user={user} estimation={estimation}/>
        );
    }
}

export default AnalyseContainer;