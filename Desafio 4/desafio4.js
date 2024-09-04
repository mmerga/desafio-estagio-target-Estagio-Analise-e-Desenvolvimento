'use strict';

const SP = 67836.43;
const RJ = 36678.66;
const MG = 29229.88;
const ES = 27165.48;
const Outros = 19849.53;

const total = SP + RJ + MG + ES + Outros;
const totalSP = (SP / total) * 100;
const totalRJ = (RJ / total) * 100;
const totalMG = (MG / total) * 100;
const totalES = (ES / total) * 100;
const totalOutros = (Outros / total) * 100;

console.log('SP: ' + totalSP.toFixed(2) + '%');
console.log('RJ: ' + totalRJ.toFixed(2) + '%');
console.log('MG: ' + totalMG.toFixed(2) + '%');
console.log('ES: ' + totalES.toFixed(2) + '%');
console.log('Outros: ' + totalOutros.toFixed(2) + '%');