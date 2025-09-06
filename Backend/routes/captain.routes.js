const express = require('express');
const router = express.Router();
const  { body } = require('express-validator');
const captainController = require('../controllers/captain.controller');
const authMiddleware = require('../middleware/auth.middleware');


router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6}).withMessage('Password should be atleast 6 characters long'),
    body('fullname.firstname').isLength({ min: 3}).withMessage('Firstname should be at least 3 characters long'),
    body('fullname.lastname').isLength({ min: 3}).withMessage('Lastname should be at least 3 characters long'),
    body('vehicle.color').isLength({ min: 3}).withMessage('Vehicle color should be at least 3 characters long'),
    body('vehicle.plate').isLength({ min: 3}).withMessage('Vehicle plate should be at least 3 characters long'),
    body('vehicle.capacity').isNumeric().withMessage('Vehicle capacity should be a number'),
    body('vehicle.vehicleType').isIn(['Car', 'Bike', 'Auto']).withMessage('Invalid vehicle type')
],
    captainController.registerCaptain
)


router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6}).withMessage('Password should be atleast 6 characters long'),
],
    captainController.loginCaptain
)

router.get('/profile', authMiddleware.authCaptain, captainController.getCaptainProfile);
router.get('/logout', authMiddleware.authCaptain, captainController.logoutCaptain);

module.exports = router;