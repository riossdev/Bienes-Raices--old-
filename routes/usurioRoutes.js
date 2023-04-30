import express from 'express'
import { fomularioLogin, formularioRegistro } from '../controllers/usurioControllers.js'

const routes = express.Router()

routes.get('/login', fomularioLogin)
routes.get('/registro', formularioRegistro)

export default routes