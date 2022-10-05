const express = require('express')
const globalConstants = require('./const/globalConstants.js') 
const routerConfig = require('./routes/index.routes.js')

let errorHandler = require('./middlewares/error')
let createError = require('http-errors') // se utiliza para crear un error personalizado



const configuracionApi = (app) => {

    app.use(express.json())
    app.use(express.urlencoded({extended: true}))

    return;
};
 
const configuracionRouter = (app) => { // configurar las rutas
    app.use('/api/', routerConfig.rutas_init()) // para acceder a las rutas de la api siempre deberá empezar con /api/
  
  
    app.use(function (req, res, next) { 
      next(createError(404)) // si no se encuentra la ruta, se envia un error 404
    })
    app.use(errorHandler) // configurar el middleware de manejo de errores
  
  };

const init = () => {
    
    const app = express() //crea una instancia de express
    configuracionApi(app) // configura api
    configuracionRouter(app)
    app.listen(globalConstants.PORT)
    console.log('La Aplicacion se está ejecutando en el puerto: ' + globalConstants.PORT)

};

init();


