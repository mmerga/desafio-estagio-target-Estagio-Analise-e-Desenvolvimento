'use strict';

const invertString = (string) => {
    let invertedString = "";
    for (let i = string.length - 1; i >= 0; i -= 1) {
        invertedString += string[i];
    }
    return invertedString;
};

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite a string: ', (answer) => {
    console.log('/n/n');
    console.log(`Você digitou: ${answer}`);
    console.log(`A string invertida é: ${invertString(answer)}`);
    rl.close();
});

