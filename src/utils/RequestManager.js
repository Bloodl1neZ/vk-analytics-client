class RequestManager {
    static get(url, headers = {}, params = {}) {
        const axios = require('axios');
        return axios.get(url, {
            headers,
            params
        });
    };

    static post(url, body, headers = {}, params = {}) {
        const axios = require('axios');
        return axios.post(url, body, {
            headers,
            params,
        });
    };
}

export default RequestManager;