import mongoose from "mongoose";
const patientSchema = new mongoose.Schema({

}, {timestamps})
export const Patient = mongoose.model("Patient", patientSchema)