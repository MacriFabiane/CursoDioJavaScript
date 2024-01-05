const vitor ={//objeto do javascript (puro uma struct?)
    nome: 'Vitor Guerra',
    idade: 25,

    descrever: function (){//método: função dentro de um objeto
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);//usa a crase pra abrir e fechar
    }
};

// console.log(vitor.nome);
// console.log(vitor.idade);
// console.log(vitor);

// vitor.descrever = function(){//modificando o método lá de dentro
//     console.log(`Meu nome é ${this.nome}`);
// }

// vitor.descrever();//pra chamar o metodo
//vitor.alguma coisa -> acesso direto

//editando informações de um objeto

// vitor.altura = 1.69;
// delete vitor.nome; //deleta

// console.log(vitor);

//ACESSO DINÂMICO 28/32
const atributo ='idade';

vitor['idade']=50;//pega o 50 q coloca no atributo idade do vitor
console.log(vitor[atributo]);//quer o valor de vitor que tem o nome contido na var atributo ou como na linha abaixo
console.log(vitor['nome']);
