let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, lowercase: true, required: true},
    address: {type: String},
    bio: String,
    hobbies: String
}, {timestamps: true});

let User = mongoose.model('User', userSchema);

module.exports = User;