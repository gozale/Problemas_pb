console.log("Imprime el mayor y el menor de una serie de 5 números que introduzcamos");

function getMax(num_list){
  let max= num_list[0];
  for(let i=1; i<num_list.length; i++){
    if(max < num_list[i]){
      max=num_list[i];
    }
  }
  return max;   
}
  
function getMin(num_list){
  let min= num_list[0];
  for(let i=1; i<num_list.length; i++){
    if(min > num_list[i]){
      min=num_list[i];
    }
  }
  return min;  
}
  
const readline= require('readline');
 
const rl= readline.createInterface({
  input: process.stdin,
  output: num_list.stdout
});
  
let lineCount=0;
let num_list = new Array(5);
rl.prompt();

rl.on('linea',(linea)=>{
    num_list[lineCount] = Number.parseFloat(linea);
    lineCount++;
    if (lineCount == 5) {
        rl.close();
        console.log(num_list);
        console.log('Número mínimo: ' + getMin(num_list));
        console.log('Número máximo: ' + getMax(num_list));
    }  
})
