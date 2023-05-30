import { check, validationResult } from 'express-validator'
import Usuario from '../models/Usuario.js'
import { generarId } from '../helpers/tokens.js'

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
    await check('repitePassword').notEmpty().withMessage('las contraseñas no son iguales').run(req)

    let resultado = validationResult(req)
    // verify user Empty

    if(!resultado.isEmpty()){ 
        return res.render('auth/registro',{
            pagina: 'Crear Cuenta',
            errores: resultado.array(),
            usuario:{
                nombre: req.body.nombre,
                email: req.body.email
            }
        })
    }
   
    // Extraer los datos
    const  {nombre, email, password } = req.body

    // verificar el usario no este duplicado
    const existeUsuario = await  Usuario.findOne({ where : { email : email }})
 
    if(existeUsuario) {
         return res.render('auth/registro',{
            pagina: 'Crear Cuenta',
            errores: [{msg: 'El usuari o ya se enecuntra registrado'}],
            usuario: {
                nombre: req.body.nombre,
                email: req.body.email
        
            }
            
        })
    } 

    // const usuario = await Usuario.create(req.body) 
    // res.json(usuario)
    // console.log(existeUsuario)
    // return;
  
    // Almacenar
    await Usuario.create({
        nombre,
        email,
        password,
        token: generarId()
    })
    
    //    Message User
    res.render('templates/mensaje',{
        pagina: 'Cuenta Creada Correctamente',
        mensaje: 'Hemos enviado un Email de confirmación, presiona en el enlace'
    })
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