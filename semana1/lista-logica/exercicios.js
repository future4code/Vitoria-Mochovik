// EXEMPLOS---------------------------------------------------------------------------

// EXERCÍCIO 0A-----------------------------------------------------------------------


function soma(num1, num2) {
   return num1 + num2
}

// EXERCÍCIO 0B-----------------------------------------------------------------------

function imprimeMensagem() {
   const mensagem = prompt('Digite uma mensagem!')

   console.log(mensagem)
}

// EXERCÍCIO-----------------------------------------------------------------------
 
 //EXERCÍCIO 1-----------------------------------------------------------------------
 
 function calculaAreaRetangulo() {
   const altura = Number(prompt("Insira a altura do retângulo"))
   const largura = Number(prompt("Insira o valor da largura do retângulo"))

   const areaDoRetangulo = Number((altura * largura))
   console.log(areaDoRetangulo)
}

//EXERCÍCIO 2-----------------------------------------------------------------------
 
function imprimeIdade() {
   const anoAtual = Number(prompt("Qual o ano atual?"))
   const anoDeNascimento = Number(prompt("Qual o ano do seu nascimento?"))

   const idade = anoAtual - anoDeNascimento
   console.log(idade)
}

//EXERCÍCIO 3-----------------------------------------------------------------------
 
function calculaIMC(peso, altura) {
   const resultadoIMC = peso / (Math.pow(altura, 2))
   return resultadoIMC.toFixed(2)
}

//EXERCÍCIO 4-----------------------------------------------------------------------
 
function imprimeInformacoesUsuario() {
   const nome = prompt("Qual seu nome?")
   const idade = Number(prompt("Qual sua idade?"))
   const email = prompt("Qual seu e-mail?")

   console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

//EXERCÍCIO 5-----------------------------------------------------------------------

function imprimeTresCoresFavoritas() {
   let coresFavoritas = []
   coresFavoritas[0] = prompt("Digite sua primeira cor favorita")
   coresFavoritas[1] = prompt("Digite sua segunda cor favorita")
   coresFavoritas[2] = prompt("Digite sua terceira cor favorita")

   console.log(coresFavoritas)
}

//EXERCÍCIO 6-----------------------------------------------------------------------

function retornaStringEmMaiuscula(string) {
   return (string.toUpperCase())
}

const frase = prompt("Digite uma palavra ou frase")
retornaStringEmMaiuscula(frase)

//EXERCÍCIO 7-----------------------------------------------------------------------

function calculaIngressosEspetaculo(custo, valorIngresso) {
   return (custo / valorIngresso)
}

const custoEspetaculo = Number(prompt("Qual o custo do espetáculo de teatro?"))
const valorDeCadaIngresso = Number(prompt("Qual o valor de cada ingresso?"))

calculaIngressosEspetaculo(custoEspetaculo, valorDeCadaIngresso)

//EXERCÍCIO 8-----------------------------------------------------------------------

function checaStringsMesmoTamanho(string1, string2) {
   return (string1.length === string2.length)
}

const string01 = prompt("Escreva uma palavra ou frase")
const string02 = prompt("Escreva outra palavra ou frase")

checaStringsMesmoTamanho(string01, string02)

//EXERCÍCIO 9-----------------------------------------------------------------------

function retornaPrimeiroElemento(array) {
   return array[0]
}

const arrayUsarioEscolhe = []
retornaPrimeiroElemento(arrayUsarioEscolhe)

//EXERCÍCIO 10-----------------------------------------------------------------------

function retornaUltimoElemento(array) {
   return array[array.length-1]
}
const array = []
retornaUltimoElemento(array)

//EXERCÍCIO 11-----------------------------------------------------------------------

function trocaPrimeiroEUltimo(array) {
   const salvaPrimeiroElemento = retornaPrimeiroElemento(array)
   array[0] = retornaUltimoElemento(array)
   array[array.length - 1] = salvaPrimeiroElemento
   
   
   return array
}

const arrayParaTrocas = []
trocaPrimeiroEUltimo(arrayParaTrocas)
console.log(arrayParaTrocas)

//EXERCÍCIO 12-----------------------------------------------------------------------
//EXERCÍCIO 13-----------------------------------------------------------------------
//EXERCÍCIO 14-----------------------------------------------------------------------
//EXERCÍCIO 15-----------------------------------------------------------------------