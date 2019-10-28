const mongoose = require('mongoose');
let Schema = mongoose.Schema;



module.exports = mongoose.model('Workers', new Schema({
    admin: {
        type:Array
    },
    personal:{
        type:Array
    },
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    firstname1: {
        type: String,
        lowercase: true
    },
    firstname2: {
        type: String,
        lowercase: true
    },
    lastname1: {
        type: String,
        lowercase: true
    },
    lastname2: {
        type: String,
        lowercase: true
    },
    rut: {
        type: String,
        unique: true,
        lowercase: true
    },
    sex: {
        type: String,
        lowercase: true
    },
    company: {
        type: String,
        lowercase: true
    },
    state: {
        type: String,
        default: 'activo'
    },
    lab_union: {
        type: String
    },
    PSDepartmentID: {
        type: String
    },
    Manager_id: {
        type: String
    },
    Manager_ps: {
        type: String
    },
    department:{
        type: String
    },
    DomainLogin:{
        type: String
    }


}, { timestamps: true })
);


// module.exports = mongoose.model('workers', workersSchema);