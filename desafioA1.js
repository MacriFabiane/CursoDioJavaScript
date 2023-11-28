/* Faça um programa para calcular o valor de uma viagem 

Você terá 3 variáveis:
1-Preço da gasolina
2-Gasto médio combustível por Km
3-Distância em km da viagem

imprima o valor que srá gasto de combustível para a viagem

*/
const precoCombustivel = 5.79;
const gastoMedioKmPorL = 12;//14 Km/L
const distanciaKm = 1580;

const precoViagem = precoCombustivel*(distanciaKm/gastoMedioKmPorL);
console.log("Valor da viagem: R$" + precoViagem.toFixed(2));//numeros após a casa decimal