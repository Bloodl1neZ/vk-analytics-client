class VkRequestManager {
    static get(url, headers = {}, params = {}) {
        const axios = require('axios');
        const adapter = require('axios-jsonp');
        return axios.get(url, {
            headers,
            params,
            adapter
        });
    };
}

export default VkRequestManager;