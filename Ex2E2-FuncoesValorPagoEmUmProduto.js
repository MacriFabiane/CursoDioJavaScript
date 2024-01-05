/* Elabore um algoritmo, usando funções, que calcule o que deve ser pago por um produto, considerando o preço normal da etiqueta e a escolha de condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento e efetuar o cálculo adequado

Código condição do pagamento:
-á vita débito, recebe 10% de desconto;
-á vista no dinheiro ou PIX, 15% de desconto;
-em duas vezes, preço normal da etiqueta, sem juros;
-acima de duas vezes, preço normalda etiqueta mais 10% de juros;*/
function calcularJuros(taxa, etiqueta){
        return (etiqueta*taxa).toFixed(2);
    
}

function aplicarPagamento(condicao, etiqueta){
    if(condicao==='debito'){
        console.log("Preço a pagar, com 10% de desconto: R$:"+calcularJuros(0.9,etiqueta));
    }
    else if(condicao==='dinheiro' || condicao==='pix'){
        console.log("Preço a pagar, com 15% de desconto: R$:"+calcularJuros(0.85,etiqueta));
    }
    else if(condicao==='duasVezes'){
        console.log("Preço a pagar de uma parcela de duas vezes: R$:"+(calcularJuros(1,etiqueta)/2).toFixed(2));
    }
    else{
        console.log("Preço a pagar, parcelado em mais de 2 vezes, com 10% de juros: R$:"+calcularJuros(1.1,etiqueta));
    }
}

(function main(){
    const etiqueta=100;
    const condicao='pix';

    aplicarPagamento(condicao, etiqueta);
})();


