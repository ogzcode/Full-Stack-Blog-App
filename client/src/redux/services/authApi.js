import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/",
        prepareHeaders: (headers, { getState }) => {
            const token = getState().post.token;
            if (token) {
                headers.set("authorization", `Bearer ${token}`);
            }
            else {
                headers.set("content-type", "application/json");
            }

            return headers;
        }
    }),
    tagTypes: ["Auth"],
    endpoints: (builder) => ({
        login: builder.mutation({
            query: ({ email, password }) => ({
                url: "login",
                method: "POST",
                body: {
                    email,
                    password
                }
            }),
            invalidatesTags: ["Auth"]
        }),
        getPostsPreview: builder.query({
            query: () => ({
                url: "getPostsPreview",
                method: "GET"
            }),
            providesTags: ["Auth"]
        }),
        getPostById: builder.query({
            query: (id) => ({
                url: `getPostById/${id}`,
                method: "GET"
            })
        }),
        createPost: builder.mutation({
            query: ({ formData }) => {
                return {
                    url: "auth/createPost",
                    method: "POST",
                    body: formData,
                    formData: true
                }
            }
        }),
        deletePost: builder.mutation({
            query: ({ id }) => {
                console.log(id);
                return {
                    url: `auth/deletePost/${id}`,
                    method: "DELETE"
                }
            },
            invalidatesTags: ["Auth"]
        })
    })
});

export const { useLoginMutation, useCreatePostMutation, useGetPostsPreviewQuery, useGetPostByIdQuery, useDeletePostMutation } = authApi;