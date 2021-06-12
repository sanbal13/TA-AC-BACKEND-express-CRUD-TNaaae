let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, lowercase: true},
    age: {type: Number, min: 18, max: 80},
    username: String
}, {timestamps: true});

let User = mongoose.model('User', userSchema);

module.exports = User;