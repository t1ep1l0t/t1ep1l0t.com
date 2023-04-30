const mongoose = require('mongoose');

const UserModel = new mongoose.Schema({
    mail: {type: String, require: true, unique: true},
    username: {type: String, require: false, unique: true},
    password: {type: String, require: true, unique: true},
    picture: {type: String, default: 'user_without_picture.jpg'},
    role: [{type: String, require: true, default: 'USER', unique: false}],
    refresh_token: {type: String, require: true}
});

module.exports = mongoose.model('UserModel', UserModel);