import fs from "fs";
import { User } from "../model/User.js";
import { Post } from "../model/Posts.js";
import { __dirname } from "../app.js";

export const createPost = async (req, res) => {
    try {
        const { heading, subheading, content } = req.body;
        const name = req.file.originalname;
        
        const user = await User.findOne({ });

        const post = await Post.create({
            heading,
            subheading,
            mainImage: name,
            content,
            authorId: user._id,
            time: new Date().toLocaleDateString()
        })
        
        res.status(201).json({ message: "Post created successfully", post });
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}

export const getPostsPreview = async (req, res) => {
    const { page } = req.query;
    const limit = 5;
    try {
        const skip = (page - 1) * limit;

        const totatlPosts = await Post.countDocuments();
        const posts = await Post.find({ }, "heading subheading time").skip(skip).limit(limit);
        res.status(200).json({ posts, pageCount: Math.ceil(totatlPosts / limit), currentPage: page });
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }  
}

export const getPostById = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await Post.findById(id);
        res.status(200).json({ post });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
}

export const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await Post.findByIdAndDelete(id);
        const images = await Post.find({ mainImage: post.mainImage });
        const deleteImage = __dirname + "/public/" + post.mainImage;

       if (deleteImage && images.length == 0) {
            fs.unlink(deleteImage, (err) => {
                if (err) {
                    console.log(err);
                }
            })
        }

    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" })
    }
}