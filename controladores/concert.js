const axios = require('axios')

const getUnidades = async() => {
    console.log('viendo');
    let resp = await axios.get('https://concertconsumer.turner.com/businessunits?startindex=10&maxresults=12')

    return resp;
}

const getTrab = async(ntuser) => {
    console.log('viendo');
    let resp = await axios.get(`https://concertconsumer.turner.com/people?ntlogin=${ntuser}`)
    return resp;
}

const getJefe = async(ntuser) => {

    let consulta = await axios.get(`https://concertconsumer.turner.com/people?ntlogin=${ntuser}`)
        // console.log(consulta);
        // resp = consulta.Manager
    return consulta;
}







module.exports = {
    getUnidades,
    getTrab,
    getJefe
}