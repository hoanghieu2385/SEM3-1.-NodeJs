const User = require('../models/userModels');

exports.createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(200).json({
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
        const users = await User.find();
        console.log('Users found:', users);
        res.render('user/index', { users: users });
    } catch (err) {
        console.error('Error retrieving users:', err);
        res.status(500).render('error', {
            message: 'Error retrieving users',
            error: err
        });
    }
}