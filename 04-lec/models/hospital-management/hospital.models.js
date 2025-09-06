import mongoose from "mongoose";
const hospitalSchema = new mongoose.Schema({

}, {timestamps})
export const Hospital = mongoose.model("Hospital", hospitalSchema)