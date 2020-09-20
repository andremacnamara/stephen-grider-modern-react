import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID V7JjFf4LkJEUL1bLt7kZt_GZajub1s6Gw9b_6Q8sawM'
    }
});