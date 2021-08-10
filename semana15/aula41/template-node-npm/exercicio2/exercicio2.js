//QUESTÃO 2

const operation = process.argv[2]
const number1 = Number(process.argv[3])
const number2 = Number(process.argv[4])
let result

if(operation && number1 && number2){
    switch(operation){
        case 'add':
            result = " \033[1;32m"+ Number( number1 + number2)
            break;
        case 'sub':
            result =  " \033[1;32m"+ Number(number1 - number2)
            break;
        case 'mult':
            result =  " \033[1;32m"+ Number(number1 * number2)
            break;
        case 'div':
            result =  " \033[1;32m"+ Number(number1 / number2)
            break;
        default:
            result = "\033[31m" +"Valores ou operação inválida."+ " \033[1;32m"+ "Digite a operação (add, sub, mult ou div) e dois números, exemplo: 'add 2 2'"
    }  
} else if((!operation && number1 && number2) ||
    (operation && !number1 && number2) || 
    (operation && number1 && !number2)){
        result = "\033[31m" +"Você inseriu apenas dois parametro, insira 3."+" \033[1;32m" +" Exemplo: add 2 2 "
} else if((!operation && !number1 && number2) ||
    (!operation && number1 && !number2) || 
    (operation && !number1 && !number2)){
        result = "\033[31m" + "Você inseriu apenas um parametro, insira 3." +" \033[1;32m" +" Exemplo: add 2 2 "
} else if(!operation && !number1 && !number2) {
    result = "\033[31m" + "Você não inseriu nenhum parametro, insira 3."+" \033[1;32m" +" Exemplo: add 2 2 "
}


console.log("\033[0;35m " + `Resultado:` )
console.log(`${result}`)