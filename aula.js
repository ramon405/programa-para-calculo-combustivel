
/*calcular o valor de combustivel gasto em uma viagem  problema da nossa vida real*/
const precoCombustivel = 5.79;
const kmporLitros = 12;
const distanciaKM = 1580;

const litrosConsumidos = distanciaKM / kmporLitros;
const valorgasto = litrosConsumidos * precoCombustivel;

console.log (valorgasto.toFixed(2));

