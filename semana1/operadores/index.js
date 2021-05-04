// ---------------Exercícios de interpretação de código------------------

/*
 1.RESPOSTA 
 false
 false
 true
 boolean

 2.RESPOSTA
 Vai ser impresso o primeiro número que o usuário inseriu ao lado do segundo número.
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
// Pois NENHUM dos números ímpares é divisíveis por 2, e em cada dvisão resta 1 (como resto da divisão).

*/



