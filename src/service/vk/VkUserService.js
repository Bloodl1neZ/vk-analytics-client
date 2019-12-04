import LocalStorageUtils from "../../utils/LocalStorageUtils";
import VkRequestManager from "../../utils/VkRequestManager";

class VkUserService {
    static getUserById = id => {
        const params = VkUserService.getDefaultParams();
        params.user_id = id;
        params.fields = 'photo_400';
        return VkRequestManager.get("https://api.vk.com/method/users.get", VkUserService.getDefaultHeaders(), params)
            .then(res => res.data.response[0]);
    };

    static getFriendsAmountById = id => {
        const params = VkUserService.getDefaultParams();
        params.user_id = id;
        params.count = 1;
        return VkRequestManager.get("https://api.vk.com/method/friends.get", VkUserService.getDefaultHeaders(), params)
            .then(res => res.data.response.count);
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