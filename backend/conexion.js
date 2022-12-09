//COnnect to the mongodb nosql database.
const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://renzzog77:Ci2LfHA3Jxm4u7jr@movies.gybov2z.mongodb.net/?retryWrites=true&w=majority`);

const objetobd = mongoose.connection

objetobd.on('connected', ()=>{console.log('conexion correcta a MOngoDB')})
objetobd.on('error', ()=>{console.log('conexion incorrecta a MOngoDB')})

module.exports = mongoose
