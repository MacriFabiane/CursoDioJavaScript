/// como organizar as funções
function calcularIMC(peso, altura){
    return peso/Math.pow(altura,2);
}

function classificarIMC(imc){
    if(imc.toFixed(1)<18.5){
        return "Abaixo do peso";
    }
    else if(imc.toFixed(1)>=18.5 && imc.toFixed(1)<25){
        return "Peso normal";
    }
    else if(imc.toFixed(1)>=25 && imc.toFixed(1)<30){
        return "Acima do peso";
    }
    else if(imc.toFixed(1)>=30 && imc.toFixed(1)<=40){
        return "Obeso";
    }
    else{
        return "Obesidade Grave";
    }
}

(function main(){
    console.log("Programa principal\n");

    const peso =75;
    const altura=1.75;
    const imc = calcularIMC(peso, altura);

    console.log('IMC:'+ imc.toFixed(1)+'\n');
    console.log(classificarIMC(imc));

})();//colocar parenteses ao redeor de uma função faz com que ela seja imediatamente executada sem q se precise chamar a main depois
//isso pode ser feito também sem nomear a função
//main();

main = function(){//atribui uma função a outra
    console.log(1);
}

main();//imprime 1
//isso acontece pq no js as funções também são objetos e podem receber valores