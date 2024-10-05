const express = require('express');
const router = express.Router();

const {
    login,
    signup,
    sendotp,
    changePassword,
} = require('../controllers/Auth');

const { auth } = require('../middleware/auth');

router.post('/Admin/login', login);

router.post('/Admin/signup', signup);

// Route for sending OTP to the user's email
router.post('/Admin/sendotp', sendotp);

// Route for Changing the password
router.post('/Admin/changepassword', auth, changePassword);

module.exports = router;
