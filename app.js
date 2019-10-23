const concert = require('./controladores/concert');
const workers = require('./controladores/workers');
const Workers = require('./modelos/workers');


const mongoose = require('mongoose');


let getUnidades = async() => {

    try {
        let temp = await concert.getUnidades();

        return temp
    } catch (e) {
        return `No se pudo determina`;
    }
}

let getTrab = async(ntuser) => {

    try {
        let temp = await concert.getTrab(ntuser);


        return temp
    } catch (e) {
        return `No se pudo determina`;
    }
}

let getJefe = async(ntuser) => {

    try {
        let temp = await concert.getJefe(ntuser);
        jefe = temp.data
        console.log("En jefe: " + jefe[0].Manager);


        return jefe
    } catch (e) {
        return `No se pudo determina`;
    }
}


let guardaJefe = async() => {




    Workers.find(function(err, workers) {
        if (!err) {
            console.log("Antes de resolver");
            console.dir(workers);
            resolve(workers)
        } else {
            console.log("hay un error0 de resolver");
            reject(err)
        }
    })









    // try {
    //     console.log("Entra a buscar los trabajadores");

    //     let trab = await Workers.find({});

    //     console.log("Los trabajadores :" + trab);

    //     // let temp = await concert.getJefe(ntuser);
    //     // jefe = temp.data
    //     // console.log("En jefe: " + jefe[0].Manager);


    //     return trab
    // } catch (e) {
    //     return `No se pudo determinar ${e}`;
    // }
}
guardaJefe()
    .then(mensaje => {
        console.log(" por mientras");
        console.dir(mensaje);

    })
    .catch(e => console.log(e));