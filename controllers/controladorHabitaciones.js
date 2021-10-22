//EL CONTROLADOR ES EL ENCARGADO
//DE ADMINISTRAR LAS PETICIONES Y RESPUESTAS

const { request, response } = require('express')

//crear una funcion para cada operacion del servidor

function registrarHabitacion(peticion = request, respuesta = response) {

    let datosPeticion = peticion.body

    respuesta.json({
        mensaje: "estoy registrando una Habitacion"
    })

}

function buscarHabitacion(peticion = request, respuesta = response) {

    let id = peticion.params.id

    respuesta.json({
        mensaje: "estoybuscando una reserva"
    })

}

function buscarHabitaciones(peticion = request, respuesta = response) {

    respuesta.json({
        mensaje: "estoy buscando todas las Habitaciones"
    })

}

function editarHabitacion(peticion = request, respuesta = response) {

    let id = peticion.params.id

    respuesta.json({
        mensaje: "estoy editando una Habitacion"
    })

}

function eliminarHabitacion(peticion = request, respuesta = response) {

    let id = peticion.params.id
    let datosPeticion = peticion.body

    respuesta.json({
        mensaje: "estoy eliminando una Habitacion"
    })

}

module.exports = {

    registrarHabitacion,
    buscarHabitacion,
    buscarHabitaciones,
    editarHabitacion,
    eliminarHabitacion

}
