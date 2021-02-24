const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type: String, required: true, max: 100},
    cpf: { type: String, required: true, unique: true },
    password: {type: String, required: true},
    userName: {type: String, required: false},
    email: {type: String, required: true}
})

module.exports = mongoose.model('Users', userSchema);