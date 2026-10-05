import promptSync from 'prompt-sync';
const prompt = promptSync();

let tabla = parseInt(prompt("Ingrese la tabla de multiplicar que desea ver: "));
for (let i = 1; i <= 10; i++) {
    console.log(`${tabla} x ${i} = ${tabla * i}`);
}