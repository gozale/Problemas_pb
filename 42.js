console.log("Hacer un programa que nos permita dar bajas en el fichero DATOS.DAT");

const fs = require('fs');
const readline = require('readline');
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
    //console.log(map);

    rl.question('Enter ID to delete: ', (answer) => {
        map.delete(answer);
        for (c of map.values()) {
            fs.writeFileSync('./DATOS.DAT', JSON.stringify(c));
        }
        rl.close();
    });
});
