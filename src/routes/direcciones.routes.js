const router = require("express").Router();

const direccionController = require('../controllers/direccion.controller')


router.get('/prueba', direccionController.prueba)
router.get('/', direccionController.listar)
router.post('/', direccionController.crear)
router.get('/:idDireccion', direccionController.listarInfo)



module.exports = router;