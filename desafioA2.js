/* Faça um programa para calcular o preço de uma viagem
Voce terá 5 variáveis
1-Preço etanol
2-Preço gasolina;
3-tipo de combustível que está no seu carro
4- gasto medio de combustível por Km
5-distancia em km da viagem*/

const precoEtanol =5.79;
const precoGasolina =6.66;
const KmPorL=10;
const distanciaKm =100;
const tipoCombustível = 'Gasolina';
const litrosConsumidos =distanciaKm/KmPorL;
let valorGasto;

if(tipoCombustível==='Etanol'){
     valorGasto =litrosConsumidos*precoEtanol;
    
}
else if(tipoCombustível==='Gasolina'){
    valorGasto =litrosConsumidos*precoGasolina;
}
console.log(valorGasto.toFixed(2));
