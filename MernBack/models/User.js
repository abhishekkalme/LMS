const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: {
        type: String,
        required: function () {
            return this.provider !== "google";
        },
    },
    googleId: { type: String },
    role: { type: String, enum: ['student', 'teacher', 'admin'], default: 'student' },
    provider: { type: String, default: "local" }
});

module.exports = mongoose.model("User", userSchema);
