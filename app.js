const lugar = require('./lugar/lugar');
const clima = require('./clima/clima.js');
const mongoose = require('mongoose');


let getInfo = async() => {

    try {
        let temp = await clima.getClima();

        return temp
    } catch (e) {
        return `No se pudo determina`;
    }
}

getInfo()
    .then(mensaje => console.log(mensaje.data))
    .catch(e => console.log(e));
