import express from 'express'
import usuarioRoutes from './routes/usurioRoutes.js'
import db from './config/db.js'

const app = express()

try {
    await db.authenticate();
    console.log('Conexion Full')
} catch (error) {
    console.log(error)
}
const port = 4500

app.use('/auth', usuarioRoutes)

app.set('view engine', 'pug')
app.set('views', './views')

app.use(express.static('public'))

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})

