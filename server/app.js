import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from "mongoose";
import { registerController, loginController } from './controllers/authController.js';

const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/cleanblog')
    .then(() => console.log('Connected!'));

app.use(express.static("public"));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);


app.post("/register", registerController);
app.post("/login", loginController);

/* app.get("/auth/getAllPosts");
app.get("/auth/getPostById/:id");
app.post("/auth/createPost");
app.delete("/auth/deletePostById/:id"); */



app.listen(3000, () => {
    console.log('Server started on port localhost:3000');
    }
);