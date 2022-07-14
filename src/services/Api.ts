import axios from "axios";

export default (url = 'https://justluxurylifestyle.com/') => {
    return axios.create({
        baseURL: url
    });
}