console.log("Hacer un programa que nos permita dar altas en el archivo DATOS.DAT, cuyos campos son: ID, NOMBRE, APELLIDOS, DIRECCIÓN y ESTADO");

let id;
let nombre;
let apellido;
let direccion;
let estado;
const Data = require('./Data');
const fs = require('fs');
const rl = require('readline-sync');


id = rl.question('Enter ID: ');
nombre = rl.question('Ingresa el nombre; ');
apellido = rl.question('Ingresa el apellido: ');
direccion = rl.question('Ingresa la direccion: ');
estado = rl.question('Ingresa el estado: ');

let json = JSON.stringify(new Data(id,nombre,apellido,direccion,estado));

fs.writeFileSync('./DATOS.DAT',json);
