module.exports = class Estudiante{
    constructor(){
        this.nombre = new String();
        this.notas = new Map();
    }
    find(note){
        return this.notas.get(nota);
    }
    calcularPromedio(){
        let promedio = 0;
        for(let value of this.notas.values()){
            nota += value;
        }
        return nota/10;
    }
}
