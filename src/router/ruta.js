const {Router} = require("express");
const mensajeControllers = require("../controllers/controlador");
const router = Router();


router.get("/mostrarmensaje/:mensaje",mensajeControllers);
router.get("/mostrarmensajedeJorge/:msj",mensajeControllers);

module.exports = router;