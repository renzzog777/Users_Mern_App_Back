const express = require('express')
const router = express.Router()


const mongoose = require('mongoose')
const eschema = mongoose.Schema
const eschemausuario = new mongoose.Schema({
    nombre: String,
    email: String,
    telefono: String,
    idusuario: String
})

const Modelousuario = mongoose.model('usuarios', eschemausuario)
module.exports = router
/*Ruta de prueba
router.get('/ejemplo', (req, res)=>{
    res.end('Saludo carga desde ruta ejemplo')
})*/

//Agregar Usuarios
router.post('/agregarusuario', (req, res)=>{
    const nuevousuario = new Modelousuario({
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
        idusuario: req.body.idusuario
    })
    nuevousuario.save(function(err){
        if (!err){
            res.send('Usuario agreagado correctamente')
        }else{
            res.send(err)
        }
    })
    
})

//Obtener todos los usuarios

router.get('/obtenerusuarios', (req, res)=>{
    Modelousuario.find({}, function(docs, err){
        if (!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})


//Obtener data de usuario

router.post('/obtenerdatausuario', (req, res)=>{
    Modelousuario.find({idusuario:req.body.idusuario}, function(docs, err){
        if (!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})


//Agreagar  usuario

router.post('/actualizausuario', (req, res)=>{
    Modelousuario.findOneAndUpdate({idusuario:req.body.idusuario},{
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono
    }, (err)=>{
        if(!err){
            res.send('Usuario Actualizado Correctamente')
        }else{
            res.send(err)
        }
    })
})

//Borrar  usuario

router.post('/borrarusuario', (req, res)=>{
    Modelousuario.findOneAndDelete({idusuario:req.body.idusuario},(err)=>{
        if(!err){
            res.send('Usuario Borrado Correctamente')
        }else{
            res.send(err)
        }
        
    })
})