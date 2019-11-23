import React, {Component} from 'react';

class MainPage extends Component {
    render() {
        const url = 'https://oauth.vk.com/authorize' +
            '?client_id=7184308' +
            '&display=popup' +
            '&response_type=token' +
            '&v=5.102' +
            '&scope=friends,photos,offline' +
            '&redirect_uri=https://vk-analytics-app.herokuapp.com';

        return (
            <div>
                <a href={url}>log in</a>
            </div>
        );
    }
}

export default MainPage;