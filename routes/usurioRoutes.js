import express from 'express'
import { fomularioLogin, formularioRegistro, formulairoOlvidePassword } from '../controllers/usurioControllers.js'

const routes = express.Router()

routes.get('/login', fomularioLogin)
routes.get('/registro', formularioRegistro)
routes.get('/olvidePassword', formulairoOlvidePassword)

export default routes