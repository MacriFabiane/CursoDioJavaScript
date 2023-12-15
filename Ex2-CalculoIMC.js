/* Formula do IMC:
IMC= peso/(altura*altura)

Elabore um algoritmo que dado o peso e a altura de um adulto, mostre sua condição de acordo com a tabela abaixo:

IMC em adultos:
- abaixo de 18.5 abaixo do peso;
- entre 18.5 e 25 peso normal;
- entre 25 e 30 acima do peso;
- entre 30 e 40 obeso;
- acima de 40 obesidade grave;
*/
const peso=46;
const altura=1.70;
const imc=peso/Math.pow(altura,2);

console.log("IMC: "+imc.toFixed(1));
if(imc.toFixed(1)<18.5){
    console.log("Abaixo do peso");
}
else if(imc.toFixed(1)>=18.5 && imc.toFixed(1)<25){
    console.log("Peso normal");
}
else if(imc.toFixed(1)>=25 && imc.toFixed(1)<30){
    console.log("Acima do peso");
}
else if(imc.toFixed(1)>=30 && imc.toFixed(1)<=40){
    console.log("Obeso");
}
else{
    console.log("Obesidade Grave");
}