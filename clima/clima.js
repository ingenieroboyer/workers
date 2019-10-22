const axios = require('axios')

const getClima = async() => {
    console.log('viendo');
    let resp = await axios.get('http://localhost:3000/api/trabajadores')

    return resp;
}
module.exports = {
    getClima
}