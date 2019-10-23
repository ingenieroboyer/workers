const axios = require('axios')

const getClima = async() => {
    console.log('viendo');
    let resp = await axios.get('https://concertconsumer.turner.com/businessunits?startindex=10&maxresults=12')

    return resp;
}
module.exports = {
    getClima
}