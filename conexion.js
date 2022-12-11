const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/crudmernstack');

const objetobd = mongoose.connection

objetobd.on('connected', ()=>{console.log('conexion correcta a MOngoDB')})
objetobd.on('error', ()=>{console.log('conexion incorrecta a MOngoDB')})

module.exports = mongoose