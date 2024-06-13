const {Router} = require("express");
const {mensajeControllers, gastonController} = require("../controllers/controlador");
const router = Router();


router.get("/gaston", gastonController)
router.get("/mostrarmensaje/:mensaje",mensajeControllers);
router.post("/mostrarmensaje/:mensaje",mensajeControllers);
router.get("/mostrarmensajedeJorge/:msj",mensajeControllers);

module.exports = router;