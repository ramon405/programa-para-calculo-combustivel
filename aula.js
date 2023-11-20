
/*calcular o valor de combustivel gasto em uma viagem  problema da nossa vida real*/
const precoEtanol = 5.79;
const precoGasolina = 6.77;
const kmporLitros = 12;
const distanciaKM = 1580;
const tipoCombustivel= 'Etanol';

const litrosConsumidos = distanciaKM / kmporLitros;

if (tipoCombustivel === 'Etanol') {
    const valorgasto = litrosConsumidos * precoEtanol;
    console.log (valorgasto.toFixed(2));
}

else {
    const valorgasto = litrosConsumidos * precoGasolina;
    console.log (valorgasto.toFixed(2));
};

