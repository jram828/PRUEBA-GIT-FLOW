const {Router} = require("express");
const {mensajeControllers, gastonController} = require("../controllers/controlador");
const router = Router();


router.get("/gaston", gastonController)
router.get("/mostrarmensaje/:mensaje",mensajeControllers);


module.exports = router;