const fomularioLogin = (req, res) =>{
    res.render('auth/login')
}
const formularioRegistro = (req, res) =>{
    res.render('auth/registro')
}
export {
    fomularioLogin,
    formularioRegistro
}