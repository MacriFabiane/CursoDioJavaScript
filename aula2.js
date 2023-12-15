//const CamisetaeAzul =true;
//const CamisetaNeAzul =false; booleans 
const numero =0;

const eNumeroPar = (numero % 5) === 0;//=== concorda com o tipo no js, == ignora o tipo, converte implicitamente para o tipo em comparação


console.log(eNumeroPar);

//ESTRUTURA CONDICIONAL COM IF ELSE

if(numero===0){
    console.log('ìnvalido');
}
else if(eNumeroPar){
    console.log('Par');
}
else{
    console.log('Impar');
}
