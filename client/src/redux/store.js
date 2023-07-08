import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import postSlice  from "./slice/postSlice.js";

export const store = configureStore({
    reducer: {
        post: postSlice,
    }
});
