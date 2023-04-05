console.log("Hacer un programa que simule el funcionamiento de un reloj digital y que permita ponerlo en hora");

function mostrarTiempo(){
  let f = new Date();
  let m = f.toTimeString().substr(0,8);
  console.log(m);
  setTimeout(displayTime,10000);
}
mostrarTiempo();
