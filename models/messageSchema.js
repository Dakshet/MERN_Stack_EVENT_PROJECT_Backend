import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name Required!"],
        minLength: [3, "Name must be container at least 3 characters"]
    },
    email: {
        type: String,
        required: [true, "Email Required!"],
        validate: [validator.isEmail, "Please provide vaild email!"]
    },
    subject: {
        type: String,
        required: [true, "Subject Required!"],
        minLength: [5, "Subject must be container at least 5 characters"]
    },
    message: {
        type: String,
        required: [true, "Message Required!"],
        minLength: [10, "Name must be container at least 10 characters"]
    },
})


export const Message = mongoose.model("message", messageSchema)