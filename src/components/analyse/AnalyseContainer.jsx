import React, { Component } from "react";
import AnalyseView from "./AnalyseView";
import VkUserService from "../../service/vk/VkUserService";
import AnalysisService from "../../service/AnalysisService";
import { Redirect } from "react-router-dom";

class AnalyseContainer extends Component {
  constructor(props) {
    super(props);
    this.timeout = 0;
  }

  state = {
    photos: 5,
    posts: 5,
    userId: 1,
    user: {},
    errors: {
      analysing: true,
      photos: false,
      posts: false,
      settings: false,
      userFriends: false,
      userId: false,
      user: false
    },
    progressId: null
  };

  componentDidMount() {
    this.loadUser(this.state.userId);
    this.loadProgress();
  }

  loadProgress = () => {
    AnalysisService.getCurrentProgress()
      .then(() => {
        this.setState(prev => ({
          errors: {
            ...prev.errors,
            analysing: true
          }
        }));
      })
      .catch(() => {
        this.setState(prev => ({
          errors: {
            ...prev.errors,
            analysing: false
          }
        }));
      });
  };

  loadUser = id => {
    this.loadUserInfo(id)
      .then(() => this.loadFriends(id))
      .catch(() => {
        this.setState(prev => ({
          errors: {
            ...prev.errors,
            user: true
          }
        }));
      });
  };

  handleAnalyse = event => {
    event.preventDefault();
    console.log("analyse");
    const { errors, userId, posts, photos } = this.state;
    if (Object.values(errors).includes(true)) {
      return;
    }
    AnalysisService.analyse(userId, posts, photos)
      .then(({ id }) => {
        this.setState({
          progressId: id
        });
      })
      .catch(err => {
        console.error(err);
      });
  };

  areSettingsValid = (photos, posts) => {
    return photos > 0 || posts > 0;
  };

  isSettingValid = value => {
    return value >= 0 && value <= 50;
  };

  handlePhotosChange = event => {
    const photos = Number(event.target.value);
    if (!Number.isInteger(photos)) {
      return;
    }
    const { posts, user } = this.state;
    this.setState(prev => ({
      photos,
      errors: {
        ...prev.errors,
        photos: !this.isSettingValid(photos),
        settings: !this.areSettingsValid(photos, posts)
      },
      estimation: this.calculateEstimation(user.friends, posts, photos)
    }));
  };

  handlePostsChange = event => {
    const posts = Number(event.target.value);
    if (!Number.isInteger(posts)) {
      return;
    }
    const { photos, user } = this.state;
    this.setState(prev => ({
      posts,
      errors: {
        ...prev.errors,
        posts: !this.isSettingValid(posts),
        settings: !this.areSettingsValid(photos, posts)
      },
      estimation: this.calculateEstimation(user.friends, posts, photos)
    }));
  };

  handleUserIdChange = event => {
    const userId = Number(event.target.value);
    if (!Number.isInteger(userId)) {
      return;
    }
    const valid = userId > 0;
    this.setState(prev => ({
      userId,
      errors: {
        ...prev.errors,
        userId: !valid
      }
    }));
    if (!valid) {
      return;
    }
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      this.loadUser(userId);
    }, 500);
  };

  loadUserInfo = id => {
    return VkUserService.getUserById(id).then(user => {
      this.setState(prev => ({
        user,
        errors: {
          ...prev.errors,
          user: false
        }
      }));
    });
  };

  loadFriends = id => {
    return VkUserService.getFriendsAmountById(id).then(friends => {
      this.setState(prev => {
        return {
          user: {
            ...prev.user,
            friends
          },
          errors: {
            ...prev.errors,
            userFriends: friends <= 0
          },
          estimation: this.calculateEstimation(friends, prev.posts, prev.photos)
        };
      });
    });
  };

  calculateEstimation = (friends, posts, photos) => {
    return parseInt((friends * (photos + posts) * 0.5) / 60);
  };

  isUserIdValid = id => {
    return id > 0;
  };

  render() {
    const {
      user,
      userId,
      posts,
      photos,
      estimation,
      errors,
      progressId
    } = this.state;
    const settings = { posts, photos };
    if (progressId) {
      return <Redirect to={"/progress"} />;
    }
    return (
      <AnalyseView
        onPhotosChange={this.handlePhotosChange}
        onPostsChange={this.handlePostsChange}
        onUserIdChange={this.handleUserIdChange}
        settings={settings}
        userId={userId}
        user={user}
        errors={errors}
        estimation={estimation}
        onAnalyse={this.handleAnalyse}
      />
    );
  }
}

export default AnalyseContainer;
