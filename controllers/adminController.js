const adminModel=require('../models/adminModel');
const bcrypt=require('bcryptjs');

exports.RegisterAdmin = async (req, res) => {
    const { email, username, password } = req.body;

    try {
        // Example logic
        const exists = await adminModel.findOne({});
        if (exists) {
            req.flash('error', 'Admin already exists! only one admin can be created!');
            return res.redirect('/admin/register');
        }

        // Hash the password before saving
        const bcrypt = require('bcryptjs');
        const hashedPassword = await bcrypt.hash(password, 10);

        // Otherwise, create new admin
        await adminModel.create({ email, username, password: hashedPassword });
        req.flash('success', 'Registered successfully!');
        res.redirect('/admin/login');
    } catch (err) {
        req.flash('error', 'Something went wrong!');
        res.redirect('/admin/register');
    }
};


exports.LoginAdmin=async(req,res)=>{
    try {
        
        const { username, password } = req.body;
        const existingAdmin = await adminModel.findOne({ username });
        if (!existingAdmin) {
            req.flash('error', 'Invalid credentials!');
        }
        const isMatch = await bcrypt.compare(password, existingAdmin.password);
        if (!isMatch) {
            req.flash('error', 'Invalid credentials!');
            return res.redirect('/admin/login');
        }
        // Set session variables
        req.session.adminId = existingAdmin._id;
        req.session.username = existingAdmin.username;
        req.session.isAdmin=true;
        res.status(200).redirect('/admin/adminDashboard');
    } catch (error) {
        req.flash('error', 'Something went wrong!');
        res.redirect('/admin/login');
        
    }
}

exports.adminLogout=(req,res)=>{
    req.session.destroy((err) => {
        if (err) {
            console.error('Error destroying session:', err);
            return res.status(500).send('Internal server error');
        }
        res.redirect('/admin/login');
    });
}