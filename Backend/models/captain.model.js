const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const captainSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type: String,
            required: true,
            minlength: [3, 'First name should be of minimum 3 character long.']
        },
        lastname:{
            type: String,
            required: true,
            minlength: [3, 'Last name should be of minimum 3 character long.']
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Invalid email format']
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    sokcetId: {
        type: String,
    },
    status: {
        type: String,
        enum: ['Active', 'Inactive'],
        default: 'Inactive',
    },
    vehicle: {
        color: {
            type: String,
            required: true,
            minlength: [3, 'Color should be of minimum 3 character long.']
        },
        plate: {
            type: String,
            required: true,
            minlength: [3, 'Plate should be of minimum 3 character long.']
        },
        capacity: {
            type: Number,
            required: true,
            min: [1, 'Capacity should be at least 1.']
        },
        vehicleType: {
            type: String,
            required: true,
            enum: ['Car', 'Bike', 'Auto']
        }
    },
    location: {
        lat: {
            type: Number,
        },
        long: {
            type: Number,
        }
    }
})

captainSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' })
    return token; 
}

captainSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

captainSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10);
}

const captainModel = mongoose.model('Captain', captainSchema);

module.exports = captainModel;