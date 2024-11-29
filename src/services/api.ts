import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://api-mail-gun-h3qd.onrender.com',
    headers: {
        Accept: 'application/json',
    }
})
