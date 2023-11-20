
const scanner= require("prompt-sync")({sigint: true});

var final = "";
var validar = true;

while (true) {
    var coso = scanner("Ingrese una cadena de texto o escriba 'cancelar' para terminar:");

    if (coso.toLowerCase() === "cancelar") {
        break;
    }

    if (!validar) {
        final += '-';
    }

    final += coso;
    validar = false;
}

console.log("Cadenas concatenadas: " + final);
