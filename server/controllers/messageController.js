import { Message } from "../model/Message.js";

export const createMessage = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        const createAt = new Date();

        const newMessage = await Message.create({
            name,
            email,
            message,
            createdAt: createAt.toLocaleDateString()
        });

        res.status(201).json({ message: "Message created successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}

export const getAllMessage = async (req, res) => {
    try {
        const messages = await Message.find({ });
        res.status(200).json({ messages });
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}

export const deleteMessage = async (req, res) => {
    try {
        const { id } = req.params;
        const message = await Message.findByIdAndDelete(id);

        res.status(200).json({ message: "Message deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}