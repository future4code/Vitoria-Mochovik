//QUESTÃO 2

const operation = process.argv[2]
const number1 = Number(process.argv[3])
const number2 = Number(process.argv[4])
let result

if(operation && number1 && number2){
    switch(operation){
        case 'add':
            result = number1 + number2
            break;
        case 'sub':
            result = number1 - number2
            break;
        case 'mult':
            result = number1 * number2
            break;
        case 'div':
            result = number1 / number2
            break;
        default:
            result = "Valores ou operação inválida. Digite a operação (add, sub, mult ou div) e dois números, exemplo: 'add 2 2'"
    }  
} else if((!operation && number1 && number2) ||
    (operation && !number1 && number2) || 
    (operation && number1 && !number2)){
        result = "Você inseriu apenas dois parametro, insira 3. Exemplo: add 2 2 "
} else if((!operation && !number1 && number2) ||
    (!operation && number1 && !number2) || 
    (operation && !number1 && !number2)){
        result = "Você inseriu apenas um parametro, insira 3. Exemplo: add 2 2 "
} else if(!operation && !number1 && !number2) {
    result = "Você não inseriu nenhum parametro, insira 3. Exemplo: add 2 2 "
}


console.log(`Resultado: ${result}`)