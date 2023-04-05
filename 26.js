console.log("Introducir una frase por teclado e imprimirla en el centro de la pantalla");

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

function show(frase){
  const screen = readline.screen({
    smartCSR: true
  });
  
  const text = readline.text({
    content: 'ASAS',
    top: 'center',
    left: 'center',
    align: 'center',
    valign: 'middle'
  });
  screen.append(text);
  screen.render();

}

rl.question('Introduce una frase: ', (frase) => {
  show(frase);
  readline.close();
});
