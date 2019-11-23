import React, {Component} from 'react';

class MainPage extends Component {
    render() {
        const url = 'https://oauth.vk.com/authorize' +
            '?client_id=7184308' +
            '&display=page' +
            '&response_type=token' +
            '&v=5.102' +
            '&scope=friends,photos,offline' +
            '&redirect_uri=https://vk-analytics-app.herokuapp.com/';

        return (
            <a href={url}>log in</a>
        );
    }
}

export default MainPage;