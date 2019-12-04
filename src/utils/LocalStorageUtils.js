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
}

export default LocalStorageUtils;