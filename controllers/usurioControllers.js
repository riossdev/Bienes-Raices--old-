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