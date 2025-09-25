import mongoose, { Schema } from "mongoose";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const userSchema =  new mongoose.Schema({
    username: {
        type: String,
        requird: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true //easy for search
    },
    email: {
        type: String,
        requird: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    fullname: {
        type: String,
        requird: true,
        trim: true,
        index: true
    },
    avatar: {
        type: String, // cloudinary url
        requird: true
    },
    coverImage: {
        type: String
    },
    watchHistory: [{
        type: Schema.type.ObjectId,
        ref: "Video"
    }],
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    refreshToken: {
        type: String
    }
}, {timestamps})

userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();
    this.password = bcrypt.hash(this.password, 10)
    next()
})

userSchema.method.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

export const User = mongoose.model("User", userSchema)