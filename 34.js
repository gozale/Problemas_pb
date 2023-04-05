console.log("Usando el segundo ejemplo, hacer un programa que busque una nota en la lista");

const Estudiante = require('./Estudiante');

let notesMap = new Map();
notesMap.set('Nombre genérico 1',10);
notesMap.set('Nombre genérico 2',8);
notesMap.set('Nombre genérico 3',7);
notesMap.set('Nombre genérico 4',6);
notesMap.set('Nombre genérico 5',7.5);
notesMap.set('Nombre genérico 6',8);
notesMap.set('Nombre genérico 7',10);
notesMap.set('Nombre genérico 8',2);
notesMap.set('Nombre genérico 9',1);
notesMap.set('Nombre genérico 10',10);

let estudiante = new Estudiante();
student.name = 'Nombre genérico';
student.notes = notesMap;
console.log(student.find('Nombre genérico 4'));
