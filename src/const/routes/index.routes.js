//conecta todas las rutas

const {ROUTER, Router} = require('express')

const usuariosRoutes = require ("./usuarios.routes")

const rutas_init = () => {
    const router = Router()

    router.use("/usuarios", usuariosRoutes)
    return router



}




