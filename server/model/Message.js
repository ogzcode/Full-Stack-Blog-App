import mongoose from "mongoose";

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true
    },
    message: {
        type: String,
        required: true
    },
    createdAt: {
        type: String
    }
});

export const Message = mongoose.model("Message", MessageSchema);