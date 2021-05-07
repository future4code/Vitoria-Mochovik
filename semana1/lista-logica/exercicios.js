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

