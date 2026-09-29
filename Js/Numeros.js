import promptSync from 'prompt-sync';
const prompt = promptSync();

const Numero_1 = parseInt(prompt("Ingrese el número 1: "));
const Numero_2 = parseInt(prompt("Ingrese el número 2: "));

if (Numero_1 < Numero_2 || isNaN(Numero_1) || isNaN(Numero_2)) {
    console.log("El numero ingresado no es válido.");}
else if (Numero_1 > Numero_2) {
    console.log("La suma de los números es: " + (Numero_1 + Numero_2));}
else {
    console.log("La multiplicación de los números es: " + (Numero_1 * Numero_2));}