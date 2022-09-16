const express = require('express')
const globalConstants = require('./const/globalConstants.js') 
const routerConfig = require('./routes/index.routes')


const configuracionApi = (app) => {

    app.use(express.json())
    app.use(express.urlencoded({extended: true}))
}
 
const init = () => {
    
    const app = express() //crea una instancia de express
    configuracionApi(app) // configura api

    const configuracionRouter = (app) => {
        app.use('/api/',routerConfig.rutas_init())
    }

    app.listen(globalConstants.PORT)
    console.log('La Aplicacion se está ejecutando en el puerto: ' + globalConstants.PORT)

}

init();