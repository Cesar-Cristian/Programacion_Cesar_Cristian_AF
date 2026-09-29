let cm1 = 89
let cm2 = 58
let cm3 = 89
let Peso = 53
let Estatura = 1.70
let In = 2.54
let ft = 3.281
let lb = 2.205
/*Transformación de 
centímetros a pulgadas */
const in1=cm1 * In
const in2=cm2 * In
const in3=cm3 * In
/*Transformación de 
kilogramos a libras */
const lb1=Peso * lb
/*Transformación de 
metros a pies */
const ft1=Estatura * ft
//Mostramos los resultados
console.log("La medida 1 en pulgadas es:", in1)
console.log("La medida 2 en pulgadas es:", in2)
console.log("La medida 3 en pulgadas es:", in3)
console.log("El peso en libras es:", lb1)
console.log("La estatura en pies es:", ft1)
