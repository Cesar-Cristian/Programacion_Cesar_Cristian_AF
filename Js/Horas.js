//const prompt = require("prompt-sync")();
import prompt from "prompt-sync";

nhoras = parseInt(prompt("Ingrese la cantidad de horas de sueño: "));
edad = parseInt(prompt("Ingrese su edad: "));
DiasA = 365
horasD = nhoras*DiasA*edad
console.log("El número de horas de sueño en su vida es: ", horasD)
