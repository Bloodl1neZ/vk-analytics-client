import LocalStorageUtils from '../../utils/LocalStorageUtils';
import VkRequestManager from '../../utils/VkRequestManager';

class VkUserService {
    static getUserById = id => {
        const params = VkUserService.getDefaultParams();
        params.user_ids = id;
        params.fields = 'photo_400';
        return VkRequestManager.get("https://api.vk.com/method/users.get", VkUserService.getDefaultHeaders(), params)
            .then(res => res.data.response[0]);
    };

    static getUsersByIds = ids => {
        const params = VkUserService.getDefaultParams();
        params.user_ids = ids.join(',');
        params.fields = 'photo_400';
        return VkRequestManager.get('https://api.vk.com/method/users.get',
            VkUserService.getDefaultHeaders(), params).
            then(response => response.data.response);
    };

    static getFriendsAmountById = id => {
        const params = VkUserService.getDefaultParams();
        params.user_id = id;
        params.count = 1;
        return VkRequestManager.get("https://api.vk.com/method/friends.get", VkUserService.getDefaultHeaders(), params).
            then(res => res.data.response.count);
    };

    static getUserPhotosByIds = (userId, photoIds) => {
        const params = VkUserService.getDefaultParams();
        params.owner_id = userId;
        params.album_id = 'profile';
        params.photo_ids = photoIds.join(',');
        return VkRequestManager.get('https://api.vk.com/method/photos.get',
            VkUserService.getDefaultHeaders(), params).
            then(res => res.data.response);
    };

    static getPosts = posts => {
        const params = VkUserService.getDefaultParams();
        params.posts = posts.map(({ownerId, postId}) => `${ownerId}_${postId}`).
            join(',');
        params.extended = 0;
        return VkRequestManager.get('https://api.vk.com/method/wall.getById',
            VkUserService.getDefaultHeaders(), params).
            then(res => res.data.response);
    };

    static getAccessToken = () => {
        return LocalStorageUtils.getToken();
    };

    static getDefaultHeaders = () => {
        return {
            "Content-Type": "application/json",
        };
    };

    static getDefaultParams = () => {
        return {
            "v": "5.102",
            "access_token": VkUserService.getAccessToken(),
        };
    };
}

export default VkUserService;