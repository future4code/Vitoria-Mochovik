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
//EXERCÍCIO 8-----------------------------------------------------------------------
//EXERCÍCIO 9-----------------------------------------------------------------------
//EXERCÍCIO 10-----------------------------------------------------------------------
//EXERCÍCIO 11-----------------------------------------------------------------------
//EXERCÍCIO 12-----------------------------------------------------------------------
//EXERCÍCIO 13-----------------------------------------------------------------------
//EXERCÍCIO 14-----------------------------------------------------------------------
//EXERCÍCIO 15-----------------------------------------------------------------------