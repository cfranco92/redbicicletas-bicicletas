const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    name: String,
    user: String
});

const model = mongoose.model('Bicicleta', mySchema);
module.exports = model;