const mongoose = require('mongoose');
const Schema = mongoose.schema;

let userSchema = new Schema({
    name: {type: String, required: true, max: 100},
    cpf: {type: String, required: true, unique: true},
    userName: {type: String, required: false},
    email: {type: String, required: true}
})

module.exports = mongoose.model('Users', userSchema);