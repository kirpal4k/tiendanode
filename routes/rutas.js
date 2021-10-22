const { Router } = require('express')
const rutas = Router();

//IMPORTO LOS CONTROLADORES

const { registrarReserva } = require('../controllers/controladorReservas.js')
const { buscarReserva } = require('../controllers/controladorReservas.js')
const { buscarReservas } = require('../controllers/controladorReservas.js')
const { editarReserva } = require('../controllers/controladorReservas.js')
const { eliminarReserva } = require('../controllers/controladorReservas.js')



rutas.get('/avanzada/v1/reservas', buscarReserva)
rutas.get('/avanzada/v1/reservas/:id', buscarReservas)
rutas.post('/avanzada/v1/reservas', registrarReserva)
rutas.put('/avanzada/v1/reservas/:id', editarReserva)
rutas.delete('/avanzada/v1/reservas/:id', eliminarReserva)

module.exports = rutas