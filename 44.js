console.log("Con el archivo DATOS.DAT listar todos los registros cuyo estado sea uno determinado que introduciremos por teclado");

const fs = require('fs');
const readline = require('readline');

function processObj(obj,atr, value){
    switch (atr){
        case 'nombre':
            obj.nombre = value;
            break;
        case 'apellido':
            obj.apellido = value;
            break;
        case 'direccion':
            obj.direccion = value;
            break;
        case 'estado':
            obj.estado = value;
        default:
            throw 'No se encontró atributo';
    }
}
let list = new Array();


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const fr = readline.createInterface({
    input: fs.createReadStream('./DATOS.DAT'),
    crlfDelay: Infinity
});

fr.on('line', (linea) => {
    let obj = JSON.parse(linea);
    list.push(obj);

    fr.close();
}).on('close',()=>{
    rl.question("Ingresa el estado: ", (answer) => {
        let data = answer.split(',');
        let filtered = list.filter(e => e.state.toLowerCase() === answer.toLowerCase());
        for(c of filtered){
            console.log(c);
        }
        rl.close();
    });
});
