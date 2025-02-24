const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true }, // Email must be unique
    password: { type: String, required: true }, // Ensure password is provided
    vehicle_no: { type: String, default: null }, // Default null if no booking
    vehicle_type: { type: String, default: null },
    time_duration: { type: String, default: null }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
