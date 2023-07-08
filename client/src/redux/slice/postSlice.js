import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
    name: "post",
    initialState: {
        token: "",
        post: {}
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
            localStorage.setItem('token', action.payload);
        },
        removeToken: (state) => {
            state.token = "";
            localStorage.removeItem('token');
        },
        setPostPreview: (state, action) => {
            state.postPreview = action.payload;
        },
        setPost: (state, action) => {
            state.post = action.payload;
        },
        deletePost: (state, action) => {
            console.log(action.payload);
            state.post = state.post.filter(post => post._id !== action.payload);
        }
    }
});

export const { setToken, removeToken, setPostPreview, setPost, deletePost } = postSlice.actions;
export default postSlice.reducer;