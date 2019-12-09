import LocalStorageUtils from "../utils/LocalStorageUtils";
import RequestManager from "../utils/RequestManager";

class AnalysisService {
    // apiUrl = 'http://localhost:8080/api/v1/vk/analytics/';
    static apiUrl = 'https://vk-anylysis.herokuapp.com/api/v1/vk/analytics/';

    static getAllResults = () => {
        return RequestManager.get(this.apiUrl + "results", this.getHeaders()).then(res => res.data);
    };

    static getCurrentProgress = () => {
        return RequestManager.get(this.apiUrl + "progress/current", this.getHeaders()).then(res => res.data);
    };

    static getProgressById = (id) => {
        return RequestManager.get(this.apiUrl + "progress/" + id, this.getHeaders()).then(res => res.data);
    };

    static analyse = (id, postsAmount, photosAmount) => {
        const settings = {
            friendsSettings: {
                postsAmount,
                photosAmount
            }
        };
        return RequestManager.post(this.apiUrl + "results/" + id + "/execute", settings, this.getHeaders()).then(res => res.data);
    };

    static getHeaders = () => {
        return {
            "vk-token": this.getToken(),
            "Content-Type": "application/json",
        };
    };

    static getToken = () => {
        return LocalStorageUtils.getToken();
    };
}

export default AnalysisService;