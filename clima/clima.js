const axios = require('axios')

const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=edf3676575aa2558b8d2fadf66bdbc2e`)

    return resp.data.main.temp;
}
module.exports = {
    getClima
}