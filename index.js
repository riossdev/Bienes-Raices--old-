import express from 'express'
import usuarioRoutes from './routes/usurioRoutes.js'

const app = express()

const port = 4001

app.use('/auth', usuarioRoutes)

app.set('view engine', 'pug')
app.set('views', './views')

app.use(express.static('public'))

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})

