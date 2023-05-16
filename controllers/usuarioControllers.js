import { check, validationResult } from 'express-validator'
import Usuario from '../models/Usuario.js'

const fomularioLogin = (req, res) =>{
    res.render('auth/login', {
        pagina: 'Iniciar Sesión '
    }) 
}
const formularioRegistro = (req, res) =>{
    res.render('auth/registro',{
        pagina: 'Crear Cuenta'
    })
}
const registrar = async (req, res)=>{
    // Validations
    await check('nombre').notEmpty().withMessage('El nombre no puede ir vacio').run(req)
    await check('email').isEmail().withMessage('No es un correo valido ').run(req)
    await check('password').isLength({min: 6}).withMessage('Minimo deden ser 6 caracteres la contraseña').run(req)
    await check('repitePassword').equals('password').withMessage('las contraseñas no son iguales').run(req)

    let resultado = validationResult(req)
    // verify user Empty

    if(!resultado.isEmpty()){
        return res.render('auth/registro',{
            pagina: 'Crear Cuenta',
            errores: resultado.array()
        })
    }
 
    const usuario = await Usuario.create(req.body) 
    res.json(usuario)
}

const formulairoOlvidePassword = (req, res)=>{
    res.render('auth/olvidePassword',{
        pagina: 'Recupera tu acceso a Sandiego Smart'
    })
}

export {
    fomularioLogin,
    formularioRegistro,
    registrar,
    formulairoOlvidePassword
}