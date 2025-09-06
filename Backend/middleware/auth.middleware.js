const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blacklistTokenmodel = require('../models/blacklistTokenmodel');
const captainModel = require('../models/captain.model'); 

module.exports.authUser = async(req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if(!token) {
        res.status(401).json({ mesasge: 'Unauthorized' });
    }

    const isBlackListed = await blacklistTokenmodel.findOne({ token: token });

    if(isBlackListed) {
        return res.status(401).json({ message: 'Unauthorized' });
    } 

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);

        req.user = user;
        return next();

    } catch(err) {
        res.status(401).json({ message: 'Unauthorized' });
    }
}

module.exports.authCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if(!token) {
        res.status(401).json({ message: 'Unauthorized' });
    }

    const isBlackListed = await blacklistTokenmodel.findOne({ token: token });

    if(isBlackListed) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id);

        req.captain = captain;
        return next();
    } catch(err) {
        res.status(401).json({ message: 'Unauthorized' });
    }
}