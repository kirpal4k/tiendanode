//EL CONTROLADOR ES EL ENCARGADO
//DE ADMINISTRAR LAS PETICIONES Y RESPUESTAS

const { request, response } = require('express')

//crear una funcion para cada operacion del servidor

function registrarReserva(peticion = request, respuesta = response) {

    let datosPeticion = peticion.body

    respuesta.json({
        mensaje: "estoy registrando una Reserva"
    })

}

function buscarReserva(peticion = request, respuesta = response) {

    let id = peticion.params.id

    respuesta.json({
        mensaje: "estoybuscando una reserva"
    })

}

function buscarReserva(peticion = request, respuesta = response) {

    respuesta.json({
        mensaje: "estoy buscando todas las Reserva"
    })

}

function editarReserva(peticion = request, respuesta = response) {

    let id = peticion.params.id

    respuesta.json({
        mensaje: "estoy editando una Reserva"
    })

}

function eliminarReserva(peticion = request, respuesta = response) {

    let id = peticion.params.id
    let datosPeticion = peticion.body

    respuesta.json({
        mensaje: "estoy eliminando una Reserva"
    })

}

module.exports = {

    registrarReserva,
    buscarReserva,
    buscarReservas,
    editarReserva,
    eliminarReserva

}

