'use strict';

const fs = require('fs');

const JSONFILE = fs.readFileSync('./dados.json', 'utf8');
const DATA = JSON.parse(JSONFILE);

let min = DATA[0].valor;
let max = DATA[0].valor;
let sum = 0;
let count = 0;

DATA.forEach(day => {
    if(day.valor > 0){
        if(min > day.valor) min = day.valor;
        if(max < day.valor) max = day.valor;
        sum += day.valor;
        count++;
    }
});

const AVG = sum / count;

let daysOverAverage = DATA.reduce(
    (previousValue, currentValue) => {
        if (currentValue.valor <= 0) return previousValue;
        if (currentValue.valor > AVG) return previousValue + 1;
        return previousValue
    }, 0
)

/*
 Como nao ficou claro se os dias sem faturamento eram ignorados, eu fiz um if para que se o valor de faturamento for 0, ele ignore.
 Inclusive para o valor da media.
*/

console.log('Menor valor de faturamento: ' + min);
console.log('Maior valor de faturamento: ' + max);
console.log('Media mensal: ' + AVG);
console.log('Dias com faturamento superior a media mensal: ' + daysOverAverage);
