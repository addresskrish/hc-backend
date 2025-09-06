import mongoose from "mongoose";
const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true,
        default: 100000
    },
    qualification: {
        type: String,
        required: true
    },
    experienceInYears: {
        type: Number,
        required: true,
        default: 0
    },
    worksInHospitals: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    }]
}, {timestamps})
export const Doctor = mongoose.model("Doctor", doctorSchema)