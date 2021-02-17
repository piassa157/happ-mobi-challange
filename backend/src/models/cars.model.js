const mongoose = require('mongoose');
const Schema = mongoose.schema;

let carSchema = new Schema({
    name: {type: String, required: true, max: 50},
    company: {type: String, required: true, max: 50},
    model: {type: String, required: true},
    users: [
        {type: Schema.Types.ObjectId, ref: 'Users'}
    ]

})

module.exports = mongoose.model('Cars', carSchema);