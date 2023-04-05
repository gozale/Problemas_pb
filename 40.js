console.log("Una empresa guarda las ventas realizadas por sus tres representantes a lo largo de doce meses de sus cuatro productos, VENTAS( representante, mes, producto ). Queremos proyectar el total de ventas, TOTAL ( mes, producto ), para lo cual sumamos las ventas de cada producto de cada mes de todos los representantes. Imprimir toda la información");

function generarVenta(numProd, vendedores) {
    let productos = [];
    for (let i = 0; i < numProd; i++) {
        productos.push([]);
        for (let j = 0; j < 12; j++) {
            productos[i].push([]);
            let ventas = Math.floor(Math.random() * 5) + 1;
            for (let k = 0; k < ventas; k++) {
                productos[i][j].push({
                    vendedor: vendedores[Math.floor(Math.random() * vendedores.length)],
                    venta: Math.random() * 150
                });
            }
        }
    }
    return productos;
}

let meses = [
    'Enero', 'Febrero',
    'Marzo', 'Abril', 'Mayo',
    'Junio', 'Julio', 'Agosto',
    'Septiembre', 'Octubre',
    'Noviembre', 'Diciembre'
];

let vendedores = ['Pancho', 'Torres', 'Marta']
let ventas = generarVenta(4, vendedores);

ventas.forEach((producto, indice) => {
    console.log(`Ventas producto ${indice}`);
    product.forEach((mes, indice) => {
        let total = mes.reduce((acc, current) => {
            return acc + current.venta
        }, 0);
        console.log(`${meses[indice]} : ${total}`);
    });
    console.log('\n');
});
