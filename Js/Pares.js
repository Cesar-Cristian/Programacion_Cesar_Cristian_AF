import promptSync from 'prompt-sync';
const prompt = promptSync();

	let suma = 0;
	for (let i = 1; i <= 10; i++)
        if (i%2 === 0) {
		suma=suma + i;
		console.log("La suma es:", suma);
	}
    