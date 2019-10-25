const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let colSchema = new Schema({

    ficha: String,
    rut: String
}, { collection: 'col' });

module.exports = mongoose.model('col', colSchema);