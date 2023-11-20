const scanner= require("prompt-sync")({sigint: true});
let edad=0;
let nombre="";



nombre=scanner("Introduce tu nombre=>");
edad=scanner("Introduce tu nombre=>");

if(edad>=18){
   
    console.log("Tiene permiso");

}else{
   
    console.log("No tiene permiso");
}