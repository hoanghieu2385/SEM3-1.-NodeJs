const User = require('../models/userModel.js');

exports.createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json({
            message: 'User created successfully',
            data: user
        });
    } catch (err) {
        res.status(500).json({
            message: 'Error creating user',
            error: err.message
        });
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json({
            message: 'Users retrieved successfully',
            data: users
        });
    } catch (err) {
        res.status(500).json({
            message: 'Error retrieving users',
            error: err.message
        })
    }
}
