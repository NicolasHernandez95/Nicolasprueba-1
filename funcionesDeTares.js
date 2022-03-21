const fs = require ('fs');
const archivoTareas = fs.readFileSync(__dirname + '/tarea.json', 'utf-8');
const arrayDeTareas = JSON.parse(archivoTareas);


function listar(){
for (let i = 0; i < arrayDeTareas.length; i++) {
    console.log(arrayDeTareas[i].titulo);
    }
}


module.exports = {listar};