import { configureStore } from "@reduxjs/toolkit";
import postSlice  from "./slice/postSlice.js";
import messageSlice from "./slice/messageSlice.js";

export const store = configureStore({
    reducer: {
        post: postSlice,
        message: messageSlice
    }
});
