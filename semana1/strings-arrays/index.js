//-----------------------Exercícios de interpretação de código-----------------------------

//EXERCÍCIO 01-----------------------------------------------------------------------------

/*
1. RESPOSTA

a. undefined
b. null
c. 11
d. 3
e. 
Array(11) [ 3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13 ] 
f. 9

*/

//EXERCÍCIO 02------------------------------------------------------------------------------

/*
2. RESPOSTA

SUBI NUM ÔNIBUS EM MIRROCOS 27

*/

//-----------------------Exercícios de escrita de código-----------------------------

//EXERCÍCIO 01------------------------------------------------------------------------------

/*
const nameOfUser = prompt("Qual seu nome?")
const emailOfUser = prompt("Qual seu e-mail")

console.log("O e-mail", (emailOfUser.trim()), "foi cadastrado com suceso. Seja bem-vinda(o),", nameOfUser, "!" )

*/

//EXERCÍCIO 02------------------------------------------------------------------------------

/*

const favoriteFoods = [
    "hot dog", 
    "french fries", 
    "pizza", 
    "chocolate cake", 
    "ice cream"
];
console.log(favoriteFoods)

//Item b, fiz duas possibilidade:
//Primeira possibilidade com um espaço entre cada linha:
console.log("Essas são minhas comidas preferidas:")
console.log(favoriteFoods[0])
console.log(favoriteFoods[1])
console.log(favoriteFoods[2])
console.log(favoriteFoods[3])
console.log(favoriteFoods[4])

//Segunda possibilidade sem espaço
const textoParaImpressão = `Essas são minhas comidas preferidas:
${favoriteFoods[0]}; 
${favoriteFoods[1]};
${favoriteFoods[2]};
${favoriteFoods[3]};
${favoriteFoods[4]};`

console.log(textoParaImpressão)

favoriteFoods[1] = prompt("Qual sua comida preferida?")
const textoParaImpressãoNovaLista = `Nova lista de comidas:
${favoriteFoods[0]}; 
${favoriteFoods[1]};
${favoriteFoods[2]};
${favoriteFoods[3]};
${favoriteFoods[4]};`

console.log(textoParaImpressãoNovaLista)

*/

//EXERCÍCIO 03------------------------------------------------------------------------------

/*

const listaDeTarefas = [null]

listaDeTarefas[0] = prompt("Digite uma tarefa que você precise realizar no dia:")
listaDeTarefas[1] = prompt("Digite uma tarefa que você precise realizar no dia:")
listaDeTarefas[2] = prompt("Digite uma tarefa que você precise realizar no dia:")

console.log("As tarefas do seu dia são:")
console.log(listaDeTarefas[0])
console.log(listaDeTarefas[1])
console.log(listaDeTarefas[2])

const indiceDaTarefaRealizada = Number(prompt("Qual das tarefas você já realizou? Digite 0, 1 ou 2"))
listaDeTarefas.splice(indiceDaTarefaRealizada, 1)

console.log("As tarefas pendentes do seu dia são:")
console.log(listaDeTarefas[0])
console.log(listaDeTarefas[1])

*/

//-----------------------Desafios-----------------------------

//DESAFIO 01--------------------------------------------------

/*

const frase = prompt("Digite uma frase")

const separador = " "
let arrayDaFrase = [null];
arrayDaFrase = frase.split(separador)

console.log("O array tem", arrayDaFrase.length, "elementos")
console.log("O array com a frase é:")
console.log(arrayDaFrase.join(" / "))

*/

//DESAFIO 02--------------------------------------------------

/*

const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
let indiceDaFruta
const frutaQueDesejaLocalizar = "Abacaxi"
indiceDaFruta = frutas.indexOf(frutaQueDesejaLocalizar)

console.log("O índice da fruta Abacaxi é:", indiceDaFruta, " e o tamanho do array é:", frutas.length)

*/
