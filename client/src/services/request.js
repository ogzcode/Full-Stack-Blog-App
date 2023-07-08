import axios from "axios";
import { URLS } from "./url";
import { getToken } from "./storage";

export const login = (email, password) => {
    return axios.post(URLS.LOGIN, { email, password });
}

export const getPostPrewiew = () => {
    return axios.get(URLS.GET_POSTS_PREVIEW);
}

export const getPostById = (id) => {
    return axios.get(`${URLS.GET_POST_BY_ID}/${id}`);
}

export const createPost = (data) => {
    return axios.post(URLS.CREATE_POST, data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}

export const deletePost = (id) => {
    const response = axios.delete(`${URLS.DELETE_POST}/${id}`);
    return response.data;
}

export const setupAxiosInterceptors = () => {
    axios.interceptors.request.use(
        config => {
            const token = getToken();
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        }
    );
}
