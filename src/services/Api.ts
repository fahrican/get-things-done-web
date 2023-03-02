import axios from "axios";

export default (url = 'https://task-manager.justluxurylifestyle.com/api/v1/') => {
    return axios.create({
        baseURL: url
    });
}