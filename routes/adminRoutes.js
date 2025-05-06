const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const adminAuth=require('../middleware/adminAuth'); // Import the admin authentication middleware
// Registration GET route
router.get('/register', (req, res) => {
    res.render('admin/adminRegister'); // Flash messages handled by res.locals
});

// Registration POST route
router.post('/register', adminController.RegisterAdmin);

// Login GET route
router.get('/login', (req, res) => {
    res.render('admin/adminLogin'); // Flash messages handled by res.locals
});

// Login POST route
router.post('/login', adminController.LoginAdmin);

router.get('/adminDashboard',adminAuth,(req,res)=>{
    res.render('admin/adminDashboard'); // Flash messages handled by res.locals
});
module.exports = router;

// Logout route
router.get('/logout', adminController.adminLogout);