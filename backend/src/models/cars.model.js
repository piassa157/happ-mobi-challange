const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    name: {type: String, required: true, max: 50},
    company: {type: String, required: true, max: 50},
    model: {type: String, required: true},
    users: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'Users'}
    ],
    rented: {type: Boolean,required: false}

})

module.exports = mongoose.model('Cars', carSchema);