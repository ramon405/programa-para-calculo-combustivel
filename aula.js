/*calcular  o valor pago de um produto...  problemas da nossa vida real*/
const precoEtiqueta = 100;
const formadePagamento  = 4;


if(formadePagamento === 1) {
  console.log(precoEtiqueta - (precoEtiqueta * 0.1));
}
else if (formadePagamento === 2) {
  console.log(precoEtiqueta - (precoEtiqueta * 0.15));
 }

 else if (formadePagamento === 3) {
  console.log(precoEtiqueta );
 }
 else {
  console.log(precoEtiqueta + (precoEtiqueta * 0.1));
  
 }