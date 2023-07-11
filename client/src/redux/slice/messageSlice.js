import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllMessage, deleteMessage, createMessage } from "../../services/request";

export const fetchMessageAsyncThunk = createAsyncThunk("message/fetchMessage", async () => {
    const response = await getAllMessage();
    return response.data;
});

export const deleteMessageAsyncThunk = createAsyncThunk("message/deleteMessage", async (id) => {
    const response = await deleteMessage(id);
    return id;
});

export const createMessageAsyncThunk = createAsyncThunk("message/createMessage", async (data) => {
    const response = await createMessage(data);
    return response.data;
});


export const messageSlice = createSlice({
    name: "message",
    initialState: {
        messageList: [],
        error: "",
        loading: false,
    },
    extraReducers(builder) {
        builder
            .addCase(fetchMessageAsyncThunk.fulfilled, (state, action) => {
                state.messageList = action.payload.messages;
                state.loading = false;
            })
            .addCase(fetchMessageAsyncThunk.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(fetchMessageAsyncThunk.rejected, (state, action) => {
                state.error = action.payload;
            })
            .addCase(deleteMessageAsyncThunk.fulfilled, (state, action) => {
                state.messageList = state.messageList.filter(message => message._id !== action.payload);
            })
            .addCase(createMessageAsyncThunk.fulfilled, (state, action) => {
                state.messageList = [...state.messageList, action.payload.message];
            })
    }
}); 

export default messageSlice.reducer;