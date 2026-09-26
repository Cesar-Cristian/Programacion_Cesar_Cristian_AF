import promptSync from 'prompt-sync';
const prompt = promptSync();

const nhoras = parseInt(prompt("Ingrese la cantidad de horas de sueño: "));
const edad = parseInt(prompt("Ingrese su edad: "));
const DiasA = 365;
const horasD = nhoras * DiasA * edad;
console.log("El número de horas de sueño en su vida es: ", horasD)
