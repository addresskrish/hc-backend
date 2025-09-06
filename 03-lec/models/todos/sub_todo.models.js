import mongoose from "mongoose";
const subTodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps: true})
/* pease make sure you  write export here */
export const SubTodo = mongoose.model("SubTodo", subTodoSchema)