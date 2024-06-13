const {Router} = require("express");
const mensajeControllers = require("../controllers/controlador");
const router = Router();


router.get("/mostrarmensaje/:mensaje",mensajeControllers);
router.post("/mostrarmensaje/:mensaje",mensajeControllers);

module.exports = router;