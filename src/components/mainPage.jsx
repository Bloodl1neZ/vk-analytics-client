import React, {Component} from 'react';

class MainPage extends Component {
    render() {
        const url = 'https://oauth.vk.com/authorize' +
            '?client_id=7184308' +
            '&display=page' +
            '&response_type=token' +
            '&v=5.102' +
            '&scope=friends,photos,offline' +
            '&redirect_uri=https://vk-analytics-app.herokuapp.com';

        const url1 = 'https://oauth.vk.com/authorize' +
            '?client_id=7184308' +
            '&display=page' +
            '&response_type=token' +
            '&v=5.102' +
            '&scope=friends,photos,offline' +
            '&redirect_uri=http://vk-analytics-app.herokuapp.com';

        const url2 = 'https://oauth.vk.com/authorize' +
            '?client_id=7184308' +
            '&display=page' +
            '&response_type=token' +
            '&v=5.102' +
            '&scope=friends,photos,offline' +
            '&redirect_uri=vk-analytics-app.herokuapp.com';

        return (
            <div>
                <a href={url}>log in</a>
                <a href={url1}>log in 1</a>
                <a href={url2}>log in 2</a>
            </div>
        );
    }
}

export default MainPage;