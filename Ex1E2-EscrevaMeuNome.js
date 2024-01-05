//Fazer uma função que escreva seu nome
function writeMyName(name){
    return "My name is: "+ name;
}

// writeMyName('Macri <3');
// writeMyName('Julia');

//Funtion that verify if u are of legal age

function legalAge(age){
    if(age>=18){
        console.log(writeMyName("Macri")+" and I'm of the legal age");
    }
    else{
        console.log("sorry bro, u can't drink yet");
    }
}
legalAge(19);
legalAge(12);