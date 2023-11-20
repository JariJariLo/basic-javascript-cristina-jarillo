const scanner= require("prompt-sync")({sigint: true});
let nota=0;
let calificación="";

nota=scanner("Introduce tu nota=>");
nota = parseFloat(nota);
switch (true) {
    case (nota>=0&&nota<=3):
        calificación="Muy Deficiente";

        break;
        case (nota>=3&&nota<=5):
            calificación="Insuficiente";
        break;
        case (nota>5&&nota<=6):
            calificación="Suficiente";
        break;
        case (nota>6&&nota<=7):
            calificación="Bien";
        break;
        case (nota>7&&nota<=9):
            calificación="Notable";
        break;
        case (nota>9&&nota<=10):
            calificación="Sobresaliente";
        break;
    default:
        calificación="Nota errónea"
        break;
}
console.log(calificación);