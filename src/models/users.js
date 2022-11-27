const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema(
    {
        userName: { type: String },
        userPassword: { type: String },
        userEmail: { type: String },
        role: { type: String, enum: ['Doctor', 'Patient'], default: 'Patient' },
        userSocketId: { type: String }
    },
    { timestamps: true }
);

module.exports = mongoose.model('user', usersSchema);
