import express from 'express'
import { fomularioLogin, formularioRegistro, registrar, formulairoOlvidePassword } from '../controllers/usurioControllers.js'

const routes = express.Router()

routes.get('/login', fomularioLogin)
routes.get('/registro', formularioRegistro)
routes.post('/registro', registrar )
routes.get('/olvidePassword', formulairoOlvidePassword)

export default routes