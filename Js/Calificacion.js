import promptSync from 'prompt-sync';
const prompt = promptSync();

const calificacion = parseInt(prompt("Ingrese la calificación: "));

if (calificacion < 0 || calificacion > 100 || isNaN(calificacion)) {
    console.log("La calificación ingresada no es válida.");
} else if (calificacion >= 70) {
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}