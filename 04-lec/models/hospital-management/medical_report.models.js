import mongoose from "mongoose";
const medicalReportSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    }
}, {timestamps})
export const MedicalReport = mongoose.model("MedicalReport", medicalReportSchema)