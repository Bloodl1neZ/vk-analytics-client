import React, {Component} from 'react';
import getUrl from "../utils/LocationUtils";
import LocalStorageUtils from "../utils/LocalStorageUtils";

class MainPage extends Component {
    render() {
        console.log(this.props);
        console.log(this.props.location);
        console.log(this.props.location.query);
        console.log(this.props.location.hash);
        const url = 'https://oauth.vk.com/authorize' +
            '?client_id=7184308' +
            '&display=popup' +
            '&response_type=token' +
            '&v=5.102' +
            '&scope=friends,photos,offline' +
            '&redirect_uri=' + getUrl() + '/logIn';

        if (!LocalStorageUtils.getToken()) {
            return (
                <div>
                    <a href={url}>log in</a>
                </div>
            );
        }

        return (
            <div>yo</div>
        );
    }
}

export default MainPage;