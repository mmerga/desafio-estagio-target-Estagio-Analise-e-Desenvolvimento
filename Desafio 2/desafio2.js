'use strict';

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let value = 0;

rl.question('Digite o valor a ser verificado na sequencia de Fibonacci: ', (answer) => {
  value = parseInt(answer, 10);
  rl.close();
});

rl.on('close', () => {
  const fib = [0, 1];
  let i = 0;
  while (fib[i] < value) {
    fib.push(fib[i] + fib[i + 1]);
    i++;
  }

  if (fib[i] === value) {
    console.log(`O valor ${value} pertence a sequencia de Fibonacci.`);
  } else {
    console.log(`O valor ${value} NAO pertence a sequencia de Fibonacci.`);
  } 

  process.exit();
});
