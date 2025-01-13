
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id : Number,
    vehicle_no: String,
    vehicle_type: String,
    name: String,
    time_duration:String,
    
});

const User = mongoose.model('User', userSchema);

module.exports = User;