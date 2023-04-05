console.log("Generar una matriz de 4 filas y 5 columnas con números aleatorios entre 1 y 100, y hacer su matriz transpuesta");

let mat = new Array(4);
let matT = new Array(5);

for (let i = 0; i< mat.length; i++){
    mat[i] = new Array(5);
}

for (let i = 0; i< matT.length; i++){
    matT[i] = new Array(4);
}

for(let i = 0; i < mat.length; i++){
    for(let j = 0; j < mat[0].length; j++){
        let rand = Math.floor(Math.random() * 100) + 1;
        mat[i][j] = rand;
        matT[j][i] = rand;
   }
}

console.log("Matriz normal:");
console.log(mat)
console.log("Transp:"); 
console.log(matT);
