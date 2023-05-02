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
const formulairoOlvidePassword = (req, res)=>{
    res.render('auth/olvidePassword',{
        pagina: 'Recupera tu acceso a Sandiego Smart'
    })
}
export {
    fomularioLogin,
    formularioRegistro,
    formulairoOlvidePassword
}