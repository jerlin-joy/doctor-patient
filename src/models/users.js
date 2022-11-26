const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
usersSchema.pre('save', async (next) => {
    const user = this;
    console.log(user.userPassword);
    user.userPassword = await bcrypt.hash(user.userPassword, 10);
    next();
});

usersSchema.methods.comparePassword = async (password, callBack) => {
    const isMatch = await bcrypt.compare(password, this.userPassword);
    if (!isMatch) {
        return callBack(isMatch);
    }
    callBack(null, this);
};

module.exports = mongoose.model('user', usersSchema);
