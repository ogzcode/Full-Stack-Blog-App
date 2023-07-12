import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setToken, removeToken } from "../../services/storage.js";
import { login, getPostPrewiew, getPostById, createPost, deletePost } from "../../services/request.js";

export const loginAsyncThunk = createAsyncThunk("post/login", async (data) => {
    const response = await login(data.email, data.password)
    return response.data;
});

export const getPostPreviewAsyncThunk = createAsyncThunk("post/getPostPreview", async (page) => {
    const response = await getPostPrewiew(page);
    return response.data;
});

export const createPostAsyncThunk = createAsyncThunk("post/createPost", async (data) => {
    const response = await createPost(data);
    return response.data;
});

export const deletePostAsyncThunk = createAsyncThunk("post/deletePost", async (id) => {
    const response = await deletePost(id);
    return id;
});

export const getPostByIdAsyncThunk = createAsyncThunk("post/getPostById", async (id) => {
    const response = await getPostById(id);
    return response.data;
});


export const postSlice = createSlice({
    name: "post",
    initialState: {
        token: "",
        postList: [],
        singlePost: {},
        page: 1,
        pageCount: 0,
        error: "",
        loading: false,
    },
    reducers: {
        setUserToken: (state, action) => {
            state.token = action.payload;
        },
        logout: (state) => {
            state.token = "";
            removeToken()
        },
        setPostPreview: (state, action) => {
            state.postPreview = action.payload;
        },
        setPost: (state, action) => {
            state.post = action.payload;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(loginAsyncThunk.fulfilled, (state, action) => {
                state.token = action.payload.token;
                setToken(action.payload.token);
                state.loading = false;
                state.error = "";
            })
            .addCase(loginAsyncThunk.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(loginAsyncThunk.rejected, (state, action) => {
                state.error = action.payload.message;
            })

            .addCase(getPostPreviewAsyncThunk.fulfilled, (state, action) => {
                state.postList = action.payload.posts;
                state.pageCount = action.payload.pageCount;
                state.page = parseInt(action.payload.currentPage);
                state.loading = false;
                state.error = "";
            })
            .addCase(getPostPreviewAsyncThunk.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getPostPreviewAsyncThunk.rejected, (state, action) => {
                state.error = action.payload;
            })

            .addCase(createPostAsyncThunk.fulfilled, (state, action) => {
                state.postList = [...state.postList, action.payload.post];
                state.loading = false;
                state.error = "";
            })
            .addCase(createPostAsyncThunk.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(createPostAsyncThunk.rejected, (state, action) => {
                state.error = action.payload.message;
            })

            .addCase(deletePostAsyncThunk.fulfilled, (state, action) => {
                state.postList = state.postList.filter(post => post._id !== action.payload);
                state.loading = false;
                state.error = "";
            })
            .addCase(deletePostAsyncThunk.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(deletePostAsyncThunk.rejected, (state, action) => {
                state.error = action.payload.message;
            })

            .addCase(getPostByIdAsyncThunk.fulfilled, (state, action) => {
                state.singlePost = action.payload.post;
                state.loading = false;
                state.error = "";
            })
            .addCase(getPostByIdAsyncThunk.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getPostByIdAsyncThunk.rejected, (state, action) => {
                state.error = action.payload.message;
            })
    }
});

export const { setUserToken, logout, setPostPreview, setPost } = postSlice.actions;
export default postSlice.reducer;