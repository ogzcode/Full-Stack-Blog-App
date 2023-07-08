export const getToken = () => {
    return localStorage.getItem("blog-token");
}

export const setToken = (token) => {
    return localStorage.setItem("blog-token", token);
}

export const removeToken = () => {
    return localStorage.removeItem("blog-token");
}
