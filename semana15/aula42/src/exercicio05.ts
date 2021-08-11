//DESAFIO 01 - QUESTÃO 05

// NaN é Not a Number, isNaN checa se o valor é NaN
function operationNumbers(number1: number, number2: number) : void {
    if(isNaN(number1)) {
        return console.log("Invalid first number. Please enter a number!")
    } 
    if(isNaN(number2)) {
        return console.log("Invalid second number. Please enter a number")
    }

    console.log(`Numbers: ${number1} e ${number2}`)
    console.log("Soma:", number1 + number2)
    console.log("Subtração", number1 - number2)
    console.log("Multiplicação", number1*number2)

    if(number1 > number2){
        console.log("Maior", number1)
    } else if(number2 > number1){
        console.log("Maior", number2)
    } else if(number1 === number2) {
        console.log("There is no bigger number, they are equals")
    }
}

const number1 = Number(process.argv[2])
const number2 = Number(process.argv[3])

operationNumbers(number1, number2)