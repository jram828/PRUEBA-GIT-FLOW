const mensajeService = (mensaje) => {
    console.log("Mensaje enviado: ", mensaje);

    return mensaje;
}

const gastonService = () =>{
    return "Estas en la ruta de Gaston"
}
module.exports = {mensajeService,
    gastonService
}