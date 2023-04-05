console.log("Dado el archivo DATOS.DAT, realizar un programa que nos permita realizar modificaciones cuantas veces deseemos");

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
            throw 'No se encontro atributo';
    }
}
let map = new Map();

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
    map.set(obj.id, obj);

    fr.close();
}).on('close',()=>{
    rl.question("Ingresa el ID para modificar su entrada y después ingresa el parámetro a modificar y su nuevo valor, todo separado por comas: ", (answer) => {
        let data = answer.split(',');
        processObj(map.get(data[0]),data[1].toLowerCase(),data[2]);
        for (c of map.values()) {
            fs.writeFileSync('./DATOS.DAT', JSON.stringify(c));
        }
        rl.close();
    });
});
