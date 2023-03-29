import mongoose from "mongoose";
const todoList = new mongoose.Schema({
    userUID: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        requred: true,
    },
}, { timestamps: true });
export default mongoose.model("todo-list", todoList);
