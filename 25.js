console.log("Introducir un número menor de 500 y pasarlo a número romano");

function romanizar(n) {
	let	valores = [1, 5, 10, 50, 100, 500];
	let	letras = ['I', 'V', 'X', 'L', 'C', 'D'];
	let	res = new Array();
	let	num, letra, val, pos;

	for(let i = 5; i >= 0; i--) {
        num = valores[i]; 
        letra = letras[i];

		if(n >= num) {
			let r = Math.floor(n / num);
			n -= r * num; 
			if(r < 4){
				while(r--){
					res.push(letra);
				}
			} else {  
				val = res.pop(); 
				pos = (val ? letras.indexOf(val) : i) + 1; 

				res.push(letra + letras[pos]);
			}
		} else {
			res.push('');
		}
	}

	return res.join('');
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.prompt();
rl.on('line',(linea)=>{
    if(Number.parseInt(linea) > 500){
        console.log('Tiene que ser menor que 500');
        rl.close();
	return;
    }
    console.log(romanizar(Number.parseInt(linea)));
    rl.close();
});
