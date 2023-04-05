console.log("Hacer un programa que lea las calificaciones de un alumno en 10 asignaturas, las almacene en y calcule e imprima su media");

const Estudiante = require('./Estudiante');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lineCount = 0;
let estudiante = new Estudiante();
rl.question("Ingresa el nombre del estudiante, y las notas del mismo de la siguiente forma: {asignatura,nota} \nStudent name: ",(answer)=>{
    student.name = answer;
});

rl.on('line',(linea)=>{
    estudiante.notes.set(linea.split(',')[0],Number.parseFloat(linea.split(',')[1]));
    lineCount++;
    if(lineCount === 10){
        
        console.log("El promedio de "+ estudiante.estudianteName +" es: "+ estudiante.calculateMean());
        rl.close();
    }
});
