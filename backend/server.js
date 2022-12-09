const express = require('express')
const app = express()

//Importtar conexion DB
const archivoDB = require('./conexion')


//Importar achivo de rutas y modelo de usuarios
const rutausuario = require('./rutas/usuario')

//importar body parser

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/api/usuario', rutausuario)

app.get('/', (req, res)=>{
    res.end('Bienvenidos al servidor Backend')
})

//Server
app.listen(5000, function(){
    console.log('El servidor NODE esta corriendo Molto Bene')
})