import axios from "axios";
import { URLS } from "./url";
import { getToken, removeToken } from "./storage";

export const login = (email, password) => {
    return axios.post(URLS.LOGIN, { email, password });
}

export const getPostPrewiew = (page) => {
    return axios.get(`${URLS.GET_POSTS_PREVIEW}?page=${page}`,);
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

export const getAllMessage = () => {
    return axios.get(URLS.GET_ALL_MESSAGE);
}

export const createMessage = (data) => {
    return axios.post(URLS.CREATE_MESSAGE, data);
}

export const deleteMessage = (id) => {
    return axios.delete(`${URLS.DELETE_MESSAGE}/${id}`);
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

    axios.interceptors.response.use(
        response => {
            return response;
        },
        error => {
            if (error.response.status === 401) {
                removeToken();
                window.location.href = "/";
            }
            return error;
        }
    );
}
