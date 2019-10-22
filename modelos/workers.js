const mongoose = require('mongoose');
let Schema = mongoose.Schema;



// module.exports = mongoose.model('Workers', new Schema({
//     admin: {
//         type:Array
//     },
//     personal:{
//         type:Array
//     },
//     email: {
//         type: String,
//         unique: true,
//         lowercase: true
//     },
//     firstname1: {
//         type: String,
//         lowercase: true
//     },
//     firstname2: {
//         type: String,
//         lowercase: true
//     },
//     lastname1: {
//         type: String,
//         lowercase: true
//     },
//     lastname2: {
//         type: String,
//         lowercase: true
//     },
//     rut: {
//         type: String,
//         unique: true,
//         lowercase: true
//     },
//     sex: {
//         type: String,
//         lowercase: true
//     },
//     company: {
//         type: String,
//         lowercase: true
//     },
//     state: {
//         type: String,
//         default: 'activo'
//     },
//     lab_union: {
//         type: String
//     }

// }, { timestamps: true })
// );


let workersSchema = new Schema({

    firstname1: String,
    firstname2: String,
    company: String
}, { collection: 'workers5' });

module.exports = mongoose.model('workers', workersSchema);