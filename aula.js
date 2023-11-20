/*calcular  a media de notas dp semestre...  problemas da nossa vida real*/
const nota1 = 8;
const nota2 = 7;
const nota3 = 7;
const media = (nota1 + nota2 + nota3) / 3;

console.log(media);

if (media < 5) {
  console.log('reprovado');
}

else if (media >= 5 && media <=7) {
    console.log('recuperacao');
}

else  {
    console.log ('passou no semestre');
};