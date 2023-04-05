console.log("Introducir dos números por teclado y mediante un menú, calcule su suma, su resta, su multiplicación o su división");

function operaciones(op, n1,n2){
    switch (op){
        case 'sum':
            return n1 + n2;
        case 'res':
            return n1 - n2;
        case 'mul':
            return n1 * n2;
        case 'div':
            if (n2 != 0)
                return n1 / n2;
            else throw ('Error: Division entre 0');
    }
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let param = new Array();

rl.on('line',(linea)=>{
    param = linea.split(',');
    console.log(operaciones(param[0],Number.parseFloat(param[1]),Number.parseFloat(param[2])));
    rl.close();
});
console.log("Ingresa la operación deseada: ('sum','res','mul','div') y los dos números separador por comas");
rl.prompt();
