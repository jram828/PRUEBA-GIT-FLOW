const{ mensajeService,gastonService} = require("../service/mensaje");

const mensajeControllers = async(req, res) =>{
    const {mensaje} = req.params;
   
   console.log(mensaje);
    try{
        const response = await mensajeService(mensaje);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};

const gastonController = async () =>{
    try {
        const gaston = await gastonService
        res.status(200).json(gaston)
    } catch (error) {
        res.status(500).json({error:error.message}) 
    }

}

module.exports = {mensajeControllers, gastonController};