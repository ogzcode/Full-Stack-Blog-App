import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    heading: {
        type: String,
        required: true
    },
    subheading: {
        type: String,
        required: true
    },
    mainImage: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    time: {
        type: String,
        required: true
    }
});

export const Post = mongoose.model("Post", PostSchema);