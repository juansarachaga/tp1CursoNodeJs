//conecta todas las rutas

const {ROUTER, Router} = require("express")

const usuariosRoutes = require ("./usuarios.routes")
const direccionesRoutes = require ("./direcciones.routes")
const medicosRoutes = require ("./medicos.routes")

const rutas_init = () => {
    const router = Router()

    router.use("/usuarios", usuariosRoutes)
    router.use("/direcciones", direccionesRoutes)
    router.use("/medicos", medicosRoutes)
    return router



};

module.exports = { rutas_init }


