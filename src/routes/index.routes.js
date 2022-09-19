//conecta todas las rutas

const {ROUTER, Router} = require("express")

const usuariosRoutes = require ("./usuarios.routes")
const direccionesRoutes = require ("./direcciones.routes")
const telefonosRoutes = require ("./telefonos.routes")

const rutas_init = () => {
    const router = Router()

    router.use("/usuarios", usuariosRoutes)
    router.use("/direcciones", direccionesRoutes)
    router.use("/telefonos", telefonosRoutes)
    return router



};

module.exports = { rutas_init }


