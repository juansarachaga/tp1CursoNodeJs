const router = require("express").Router();

const medicoController = require('../controllers/medico.controller')


router.get('/prueba', medicoController.prueba)
router.get('/', medicoController.listar)
router.post('/', medicoController.crear)
router.get('/:idmedico', medicoController.listarInfo)



module.exports = router;