const funcionesDeTareas = require("./funcionesDeTares");

let accion = process.argv[2];
switch (accion) {
    case "listar": funcionesDeTareas.listar();
        break;
    case undefined: console.log("Atención - Tienes que pasar una acción.")
        break;
    default: console.log("No entiendo qué quieres hacer.")
}


