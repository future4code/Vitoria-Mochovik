// ---------------Exercícios de interpretação de código------------------

/*
 1.RESPOSTA 
 a. false
 b. false
 c. true
 d. boolean

 2.RESPOSTA
 Vai ser impresso o primeiro número que o usuário inseriu ao lado do segundo número,
 ou seja, ele não consegue somar.
 Se o usuário inseriu 1 e 2:
 O programa imprimirá: 12
 
 Esse erro acontece pois quando passa pelo "prompt" 
 o resultado sai como string, então precisa-se converter para número.

 3.RESPOSTA
 let primeiroNumero = Number(prompt("Digite um numero!"))
 let segundoNumero = Number(prompt("Digite outro numero!"))

 const soma = primeiroNumero + segundoNumero

 console.log(soma)
*/

// ---------------Exercícios de escrita de código------------------

// EXERCÍCIO 01----------------------------------------------------
/*

const idade = Number(prompt("Qual a sua idade?"))
const idadeMelhorAmigo = Number(prompt("Qual a idade do seu melhor amigo?"))

console.log("Sua idade é maior do que a do seu melhor amigo?", idade > idadeMelhorAmigo)
console.log("A diferença de idade entre você e seu melhor amigo é de:", idade - idadeMelhorAmigo)

*/

// EXERCÍCIO 02-------------------------------------------------------

/*

const numeroPar = Number(prompt("Insira um número par"))
console.log("O resto da divisão de", numeroPar, "por 2 é:", numeroPar % 2)
console.log(numeroPar, "% 2 = ", numeroPar % 2 )

//  2-C Sim existe um padrão, todos os números pares inseridos vão dar como resto da divisão por 2 
// igual a 0. Isso acontece pois TODOS os inúmeros pares são divisíveis por dois.

// 2-D Caso o usuário insira um número ímpar sempre sobrará o valor 1 como resto da divisão por 2.
// Pois NENHUM dos números ímpares é divisível por 2, e em cada dvisão resta 1 (como resto da divisão).

*/

// EXERCÍCIO 03-------------------------------------------------------

/*

const idadeAnos = Number(prompt("Quas sua idade em anos?"))
console.log("Você tem ", idadeAnos, " ANOS de idade")

const idadeMes = idadeAnos * 12
const idadeDias = idadeAnos * 365
const idadeHoras = idadeAnos * 365
 * 24
console.log("Você tem", idadeMes, "MESES de idade")
console.log("Você tem", idadeDias, "DIAS de idade")
console.log("Você tem", idadeHoras, "HORAS de idade")

*/

// EXERCÍCIO 04-------------------------------------------------------

/*

const numero1 = Number(prompt("Digite o primeiro número"))
const numero2 = Number(prompt("Digite o segundo número"))

console.log("Você inseriu:", numero1, "e", numero2)
console.log("O primeiro número é maior que o segundo?", numero1 > numero2)
console.log("O primeiro número é igual ao segundo?", numero1 === numero2)
console.log("O primeiro número é divisível pelo segundo?", (numero1 % numero2) === 0)
console.log("O segundo número é divisível pelo primeiro?", (numero2 % numero1) === 0)

*/ 

// ----------------DESAFIOS-------------------------------------

// DESAFIO 01 --------------------------------------------------

/*
let celcius, kelvin


console.log("77ºF = ", ((77 - 32)*(5/9) + 273,15), "K")
console.log("80ºC =", ((80)*(9/5) + 32), "F" )


console.log("30ºC =", ((30)*(9/5) + 32), "F" )
console.log("30ºC =", ((((30)*(9/5) + 32) - 32)*(5/9) + 273,15), "K" )

celcius = Number(prompt("Insira um valor em Celsius:"))
let fahrenheit = ((celcius)*(9/5) + 32)
let converteKelvin =  ((fahrenheit - 32)*(5/9) + 273,15)

console.log("O valor", celcius,"ºC =", fahrenheit, "F", "e = ", converteKelvin, "K")
*/

// DESAFIO 02 --------------------------------------------------

/*

const quilowattHora = 0.05
let quantidadeQuilowatsConsumida = Number(prompt("Quantos Quilowats sua residência consumiu?"))
console.log("Uma residência que consumiu 280 quilowatt-hora, pagou", quilowattHora*280)
let porcentagemDeDesconto = Number(prompt("Digite a porcentagem de desconto"))

console.log("Uma residência que consumiu 280 quilowatt-hora, mas teve 15% de desconto, pagou", (quilowattHora*280)-(quilowattHora*280*(porcentagemDeDesconto/100)))

*/

// DESAFIO 03 --------------------------------------------------
 
/*
console.log("20lb equivalem a", 20 * 0.453592, "kg")
console.log("10.5oz equivalem a", 10.5 * 0.29767, "kg")
console.log("100mi equivalem a", 100*1609.34, "m")
console.log("50ft equivalem a", 50 * 0.3048, "m")
console.log("103.56gal equivalem a", 103.56 * 3.785, "l")
console.log("450xic equivalem a", 450 * 0.15, "l")

let libra

libra = Number(prompt("Digite um valor em libras"))
console.log(libra, "lb equivalem a", libra * 0.4533592, "kg")

*/
