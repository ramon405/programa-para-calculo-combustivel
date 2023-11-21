/*calcular  o imc de um adulto...  problemas da nossa vida real*/
const peso = 60;
const altura  = 1.70;
const imc = peso / Math.pow(altura,2);

console.log(imc);

if(imc < 18.5) {
  console.log('Abaixo do Peso');
}
else if (imc >= 18.5 && imc <= 24.9){
  console.log('Peso Ideal');
}
else if (imc > 24.9 && imc <= 29.9){
  console.log('Acima do Peso');
}
else if (imc > 30.0 && imc <= 39.9){
  console.log('obeso');
}
else{
  console.log('Obesidade grave');
}