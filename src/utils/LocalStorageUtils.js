class LocalStorageUtils {
    static setToken = (token) => {
        window.localStorage.setItem('token', token);
    };

    static setUserId = (userId) => {
        window.localStorage.setItem('userId', userId);
    };

    static getToken = () => {
        return window.localStorage.getItem('token');
    };

    static clearToken() {
        window.localStorage.removeItem('token');
    }
}

export default LocalStorageUtils;