import React from 'react';
import {Redirect} from 'react-router-dom';
import LocalStorageUtils from '../utils/LocalStorageUtils';

class LogIn extends React.Component {
    render() {
        const qs = require('qs');
        const params = qs.parse(this.props.location.hash, {ignoreQueryPrefix: true});
        const token = params['#access_token'];
        const userId = params['user_id'];
        if (token && userId) {
            LocalStorageUtils.setToken(token);
            LocalStorageUtils.setUserId(userId);
        }
        return (
            <Redirect to={'/'}/>
        );
    }
}

export default LogIn;