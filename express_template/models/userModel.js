const mongoose = require('mongoose');

// Định nghĩa Document
const userSchema = new mongoose.Schema({
    id: {
        type: String,
        required: [true, "id is required"]
    },
    username: {
        type: String,
        required: [true, "username is required"]
    },
    fullname: {
        type: String,
        required: [true, "fullname is required"]
    }
});

// Tạo Model
const User = mongoose.model('User', userSchema);

module.exports = User

