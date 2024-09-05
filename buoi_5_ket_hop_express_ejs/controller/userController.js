const User = require('../models/userModels');

exports.createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        console.log("User created successfully: ", user);
        req.session.successMessage = "User created successfully!";
        res.redirect('/users');
    } catch (err) {
        console.error('Error creating user:', err);
        req.session.errorMessage = "Error creating user: " + err.message;
        res.redirect('/users');
    }
};


exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        // console.log('Users found:', users);
        res.render('user/index', { users: users });
    } catch (err) {
        console.error('Error retrieving users:', err);
        res.status(500).render('user/index', {
            users: [],
            error: 'Error retrieving users: ' + err.message
        });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const updatedUser = await User.findByIdAndUpdate(userId, req.body, {new: true});
        console.log('User updated:', updatedUser);
        req.session.successMessage = "User updated successfully!";
        res.redirect('/users');
    } catch (err) {
        console.error('Error update user:', err);
        req.session.errorMessage = "Error updated user: " + err.message;
        res.redirect('/users');
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        await User.findByIdAndDelete(userId);
        console.log('User deleted:', userId);
        req.session.successMessage = "User deleted successfully!";
        res.redirect('/users');
    } catch (err) {
        console.error('Error deleting user:', err);
        req.session.errorMessage = "Error deleted user: " + err.message;
        res.redirect('/users');
    }
};