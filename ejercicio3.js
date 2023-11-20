
const scanner= require("prompt-sync")({sigint: true});

var suma = 0;//variable global

while (true) {
    var coso = scanner("Ingrese un número o escriba 'cancelar' para terminar:");

    if (coso.toLowerCase() === "cancelar") {
        break;
    }
    

    var numero = parseFloat(coso);

    if (isNaN(numero)) {
        console.log("No entendido. Por favor, ingrese un número válido.");
    } else {
        suma += numero;
    }
}

console.log("La suma total de los números introducidos es: " + suma);
