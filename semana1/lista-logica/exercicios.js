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

function checaIgualdadeDesconsiderandoCase(string1, string2) {
   return (retornaStringEmMaiuscula(string1) === retornaStringEmMaiuscula(string2))
}

checaIgualdadeDesconsiderandoCase(string01, string02)

//EXERCÍCIO 13-----------------------------------------------------------------------

function checaRenovacaoRG() {
   const anoAtual = Number(prompt("Qual o ano atual?"))
   const anoDeNascimento = Number(prompt("Qual o seu ano de nascimento?"))
   const anoIdentidade = Number(prompt("Qual ano a sua carteira de indentidade foi emitida?"))

   const idade = (anoAtual - anoDeNascimento)
   const tempoIdentidade = anoAtual - anoIdentidade
   const verificaRenovacao = (((idade <= 20) && (tempoIdentidade >= 5 ) )
   || ((idade > 20 && idade <= 50) && (tempoIdentidade >= 10) )
   || ((idade > 50 ) && (tempoIdentidade >= 15)) )

   console.log(verificaRenovacao)

}

//EXERCÍCIO 14-----------------------------------------------------------------------

function checaAnoBissexto(ano) {
   const resultadoBissexto = ( ((ano  % 400) === 0)
   || (((ano % 4) === 0) && ((ano % 100) !== 0)) )

   return (resultadoBissexto)
}

const ano01 = 0
checaAnoBissexto(ano01)

//EXERCÍCIO 15-----------------------------------------------------------------------

function checaValidadeInscricaoLabenu(pessoa) {
   const idadeMaior = prompt("Você tem mais de 18 anos?")
   const ensinoMedio = prompt("Você possui ensino médio completo?")
   const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

   const comparaIdade = (((idadeMaior.includes("sim")))
   || (idadeMaior.includes("si"))
   || (idadeMaior.includes("s")))
   const comparaEnsinoMedio = ((ensinoMedio.includes("sim")) 
   || (ensinoMedio.includes("si"))
   || (ensinoMedio.includes("s")))
   const comparaDisponibilidade = ((disponibilidade.includes("sim")) 
   || (disponibilidade.includes("si") )
   || (disponibilidade.includes("s")))

   const validoEstudarLabenu = ((comparaIdade === true) 
   && (comparaEnsinoMedio === true) 
   && (comparaDisponibilidade === true))

   console.log(validoEstudarLabenu)
   
}
