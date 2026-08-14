const mongoose = require('mongoose');

const ApplySchema = mongoose.Schema({
    jobId: { type: String, required: true },
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    experience: { type: String },
    resumeUrl: { type: String },
    coverLetter: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Application', ApplySchema);
