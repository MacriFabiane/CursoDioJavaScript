/* Faça um algoritmo que dado 3 notas tiradas por um alun0, num semestre da faculadade, e imprima sua média e sua 
classificação conforme a tabela abaixo:

média=(nota1+nota2+nota3)/3;

Classificação:
-média menor que 5, reprovação;
-média entre 5 e 7 recuperação;
-média acima de 7, aprovação;
*/

const nota1= 5;
const nota2= 7;
const nota3= 1;
const soma= nota1+nota2+nota3;
const media= soma/3;

if(media<5){
    console.log("Nota: "+media.toFixed(2)+ " Reprovado!");
}
else if(media>=5 && media<=7){
    console.log("Nota: "+media.toFixed(2)+ " Recuperação");
}
else{
    console.log("Nota: "+ media.toFixed(2)+ " Aprovado!");
}