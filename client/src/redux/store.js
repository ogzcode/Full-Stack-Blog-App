import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "./services/authApi.js";
import postSlice  from "./slice/postSlice.js";

export const store = configureStore({
    reducer: {
        post: postSlice,
        [authApi.reducerPath]: authApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([authApi.middleware])

});

setupListeners(store.dispatch);