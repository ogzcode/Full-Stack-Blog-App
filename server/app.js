import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from "mongoose";

import { registerController, loginController } from './controllers/authController.js';
import { createPost, getPostsPreview, getPostById, deletePost } from './controllers/postController.js';

import { docMiddleware } from './middleware/docMiddleware.js';
import { authMiddleWare } from './middleware/authMiddleware.js';

import { getAllMessage, createMessage, deleteMessage } from './controllers/messageController.js';


const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/cleanblog')
    .then(() => console.log('Connected!'));

app.use(express.static("public"));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/register", registerController);
app.post("/login", loginController);
app.get("/getPostsPreview", getPostsPreview);
app.get("/getPostById/:id", getPostById);

app.post("/auth/createPost", authMiddleWare, docMiddleware.single("image"), createPost);
app.delete("/auth/deletePost/:id", authMiddleWare, deletePost);

app.get("/auth/getAllMessage", authMiddleWare, getAllMessage);
app.post("/createMessage", createMessage);
app.delete("/auth/deleteMessage/:id", authMiddleWare, deleteMessage);

app.listen(3000, () => {
    console.log('Server started on port localhost:3000');
}
);