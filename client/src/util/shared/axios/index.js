import axios from 'axios';
import { BASE_URL } from '../../config/config';

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
    headers: { Accept: 'application/json', 'Content-type': 'application/json' }
});

export const axiosInstance = instance;
