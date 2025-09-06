import mongoose from "mongoose";
const medicalReportSchema = new mongoose.Schema({

}, {timestamps})
export const MedicalReport = mongoose.model("MedicalReport", medicalReportSchema)