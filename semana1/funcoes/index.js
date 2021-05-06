//---------------------Exercícios de interpretação de código---------------------

//EXERCÍCIO 01-------------------------------------------------------------------

/*
1A.

10
50

1B.

Caso retirassemos os dois 'console.log', NADA aparecia no console,
mas computador realizaria o cálculo pois a função foi invocada, se usássemos um debug
veriamos que o computador realizou isso.
*/

//EXERCÍCIO 02-------------------------------------------------------------------


/*
2A.

A função 'outraFuncao' recebe um texto que o usuário escreveu por meio do prompt, esse texto foi coletado
no programa principal e salvo na variável 'textoDoUsuario', ele então chega como parâmetro 'texto' até a função.
A função então converte todo o texto do usuário para letras minúsculas, e então procura se existe a palavra 'cenoura'
na frase por ele inserida, caso exista ele retorna 'true', do contrário, 'false'.

Sua utilidade é identificar se existe determininada palavra (nesse caso 'cenoura') no texto do usuário, em um caso real 
pode ser bem utilizada na construção de um chatboot onde o programa identifica o que o usuário deseja.

2B.

I - true
II - true
III - true

*/

//---------------------Exercícios de escrita de código---------------------

//EXERCÍCIO 01-------------------------------------------------------------------

//1A

/*

function imprimeInformacao() {
    console.log("Eu sou a Vitória, tenho 21 anos, moro em Araranguá - SC e sou estudante.")
}

imprimeInformacao()

*/

//1B

/*

function unificaInformacoes(nome, idade, cidade, profissao) {
     const informacoes = (`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)
     return informacoes
}

let name1 = prompt("Qual seu nome?")
const age = Number(prompt("Qual a sua idade?"))
const city = prompt("Qual cidade você mora?")
const occupation = prompt("Qual sua profissão?")

console.log(unificaInformacoes(name1, age, city, occupation))

*/

//EXERCÍCIO 02-------------------------------------------------------------------

//2A

/*
function soma(numero1, numero2) {
    const soma = numero1 + numero2
    return soma
}

const number1 = Number(prompt("Insira o primeiro número"))
const number2 = Number(prompt("Insira o segundo número"))

const resultado = soma(number1, number2)
console.log("A soma de", number1, "+", number2, "=", resultado)
*/

//2B

/*
function verificaMaior(numero1, numero2) {
    const numero1Maior = numero1 >= numero2
    return numero1Maior
}

const number1 = prompt("Insira o primeiro número")
const number2 = prompt("Insira o segundo número")

const resultado = verificaMaior(number1, number2)
console.log("O número", number1, "é maior ou igual ao número", number2, "?", resultado)

*/

//2C

/*
function verificaPar(numero1) {
    const resultado = ((numero1 % 2) === 0)
    return resultado
}

const number = prompt("Digite um número")
const resultadoPar = verificaPar(number)
console.log("O número", number, "é par?", resultadoPar)
*/

//2D

/*

function informacoesDaMensagem(mensagem) {
    const mensagemArray = mensagem.split(" ")
    console.log("O tamanho da mensagem com espaços é", mensagem.length)
    console.log("A mensagem em letras maiúsculas:", mensagem.toUpperCase())

    console.log("A mensagem conta com", mensagemArray.length, "palavras")
}


const frase = prompt("Digite sua frase favorita")
informacoesDaMensagem(frase)

*/

//EXERCÍCIO 03-------------------------------------------------------------------

/*

function soma(number1, number2) {
    const resultado = number1 + number2
    return resultado
}

function subtracao(number1, number2) {
    const resultado = number1 - number2
    return resultado
}

function multiplicacao(number1, number2) {
    const resultado = number1 * number2
    return resultado
}

function divisao(number1, number2) {
    const resultado = number1 / number2
    return resultado
}

const numero1 = Number(prompt("Digite o primeiro número"))
const numero2 = Number(prompt("Digite o segundo número"))

const resultadoSoma = soma(numero1, numero2)
const resultadoSubtracao = subtracao(numero1, numero2)
const resultadoMultiplicacao = multiplicacao(numero1, numero2)
const resultadoDivisao = divisao(numero1, numero2)

console.log("Você inseriu", numero1, "e", numero2)
console.log(`Soma: ${numero1} + ${numero2} = ${resultadoSoma}`)
console.log(`Diferença: ${numero1} - ${numero2} = ${resultadoSubtracao}`)
console.log(`Multiplicação: ${numero1} * ${numero2} = ${resultadoMultiplicacao}`)
console.log(`Divisão: ${numero1} / ${numero2} = ${resultadoDivisao.toFixed(2)}`)

*/
