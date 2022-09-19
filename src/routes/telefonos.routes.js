const router = require("express").Router();

const telefonoController = require('../controllers/telefono.controller')


router.get('/prueba', telefonoController.prueba)
router.get('/', telefonoController.listar)
router.post('/', telefonoController.crear)
router.get('/:idTelefono', telefonoController.listarInfo)



module.exports = router;