/*
- Exercícios de interpretação de código
---------------------------------------------

1. 
let a = 10
let b = 10
console.log(b)
b = 5
console.log(a, b)

1. RESPOSTA:
10
10 5
---------------------------------------------
2. 
let a = 10
let b = 20
c = a
b = c
a = b
console.log(a, b, c)

2. RESPOSTA
10 10 10
---------------------------------------------
3.

let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert('Voce recebe ${t/p} por hora')

3. RESPOSTA
A variável "p" pode ser chamada de horasDeTrabalhoPorDia
A variável "t" pode ser chamada de dinheiroRecebidoPorDia

-----------------------------------------------
- Exercícios de escrita de código

-----------------------------------------------

1.

let nome
let idade

console.log("O tipo da variável nome é:", typeof nome)
console.log("O tipo da variável idade é:", typeof idade)


    // Será imperesso como sendo o tipo das variáveis de: "undefined"
    // Pois não atribuímos nada as duas variáveis, nem mesmo o "null"


nome = prompt("Qual o seu nome?")
idade = prompt("Qual a sua idade?")
let idadeNumero = Number(idade)

console.log("O tipo da variável nome é:", typeof nome)
console.log("O tipo da variável idadeNumero é:", typeof idadeNumero)

    //Após passar pelo prompt a variável assume um tipo (string), para idade é preciso mudar de string para number

console.log("Olá" , nome, ", você tem", idade, "anos. ")

--------------------------------------------------------------
2.

let cachorroResposta, perguntaCachorro
let sorveteResposta, perguntaSorvete
let leituraResposta, perguntaLeitura

perguntaCachorro = "Você gosta de cachorro?"
perguntaSorvete = "Você gosta de sorvete?"
perguntaLeitura = "Você gosta de ler?"

cachorroResposta = true
sorveteResposta = true
leituraResposta = true

console.log(perguntaCachorro, " - ", cachorroResposta)
console.log(perguntaSorvete, " - ", sorveteResposta)
console.log(perguntaLeitura, " - ", leituraResposta)

--------------------------------------------------------------

*/

