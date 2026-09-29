//Asignamos valores a las variables
let Lib = 568;
let Dis = 45;
let ToDis = 678;
let Can_Lib = 4;
let Can_Dis = 3;
let Can_ToDis = 1;
let ConDes_Lib = 0.2;
let Des_Dis = 0.15;
let Des_To = 0.02;
//Precio de Libros con descuento
const Libros = Can_Lib * Lib;
const Des_Libros = Libros * ConDes_Lib;
const ToLibros = Libros - Des_Libros;
//Precio de Discos con descuento
const Discos = Can_Dis * Dis;
const Des_Discos = Discos * Des_Dis;
const ToDiscos = Discos - Des_Discos;
//Precio de Tocadiscos
const Tocadiscos = Can_ToDis * ToDis;
//Sumamos los resultados finales
const Subtotal1 = ToLibros + ToDiscos + Tocadiscos;
const Subtotal2 = Subtotal1 * Des_To;
const Total = Subtotal1 - Subtotal2;

console.log("La cantidad a pagar es:", Total);
