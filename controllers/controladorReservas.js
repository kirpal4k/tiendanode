//EL CONTROLADOR ES EL ENCARGADO
//DE ADMINISTRAR LAS PETICIONES Y RESPUESTAS

const { request, response } = require('express')

const { insertarReserva } = require('../services/servicioReservas.js')
const { leerReserva } = require('../services/servicioReservas.js')
const { leerReservas } = require('../services/servicioReservas.js')
const { borrarReserva } = require('../services/servicioReservas.js')
const { modificarReserva } = require('../services/servicioReservas.js')



//crear una funcion para cada operacion del servidor

async function registrarReserva(peticion = request, respuesta = response) {

    try {

        let datosPeticion = peticion.body

        await insertarReserva(datosPeticion)
        respuesta.status(200).json({
            estado: true,
            mensaje: "Exito registrando la reserva"
        })


    } catch (error) {
        respuesta.status(400).json({
            estado: false,
            mensaje: "Upss... tenemos un problema: " + error
        })
    }


}

async function buscarReserva(peticion = request, respuesta = response) {

    try {

        let id = peticion.params.id

        let reserva = await leerReserva(id)

        respuesta.status(200).json({
            estado: true,
            mensaje: reserva
        })


    } catch (error) {
        respuesta.status(400).json({
            estado: false,
            mensaje: "Upss... tenemos un problema: " + error
        })
    }

}

async function buscarReservas(peticion = request, respuesta = response) {

    try {

        let reserva = await leerReservas()

        respuesta.status(200).json({
            estado: true,
            mensaje: reserva
        })


    } catch (error) {
        respuesta.status(400).json({
            estado: false,
            mensaje: "Upss... tenemos un problema: " + error
        })
    }

}

async function editarReserva(peticion = request, respuesta = response) {


    try {

        let id = peticion.params.id
        let datosPeticion = peticion.body

        await modificarReserva(id, datosPeticion)

        respuesta.status(200).json({
            estado: true,
            mensaje: "Exito editando la Reserva"
        })


    } catch (error) {
        respuesta.status(400).json({
            estado: false,
            mensaje: "Upss... tenemos un problema: " + error
        })
    }

}

async function eliminarReserva(peticion = request, respuesta = response) {

    try {

        let id = peticion.params.id

        await borrarReserva(id)

        respuesta.status(200).json({
            estado: true,
            mensaje: "Exito al eliminar la reserva"
        })


    } catch (error) {
        respuesta.status(400).json({
            estado: false,
            mensaje: "Upss... tenemos un problema: " + error
        })
    }



}

module.exports = {

    registrarReserva,
    buscarReserva,
    buscarReservas,
    editarReserva,
    eliminarReserva

}

