const mongoose = require('mongoose');

const rentSchema = new mongoose.Schema({
    users: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'Users'}
    ],
    car: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'Cars'}
    ],
})

module.exports = mongoose.model('Rent', rentSchema);