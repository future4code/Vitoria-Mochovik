//Exercício 1-----------------------------------------------------------------------------------------

function inverteArray(array) {
   const arrayCopia = array.slice()
   for (i = 0; i <= (array.length) / 2; i++) {
      array[i] = arrayCopia[arrayCopia.length - 1 - i]
      array[array.length - 1 - i] = arrayCopia[i]
   }

   return array
}

//Exercício 2-----------------------------------------------------------------------------------------

function retornaNumerosParesElevadosADois(array) {
   let arrayParesQuadrado = []
   for (i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
         arrayParesQuadrado.push(Math.pow(array[i], 2))
      }
   }
   return arrayParesQuadrado
}

//Exercício 3-----------------------------------------------------------------------------------------

function retornaNumerosPares(array) {
   for (i = 0; i < array.length; i++) {
      if (array[i] % 2 != 0) {
         array.splice(i, 1)
      }
   }
   return array
}

//Exercício 4-----------------------------------------------------------------------------------------

function retornaMaiorNumero(array) {
   let maiorNumero = array[0]
   for (i = 0; i < array.length; i++) {
      if (array[i] > maiorNumero) {
         maiorNumero = array[i]
      }
   }
   return maiorNumero
}

//Exercício 5-----------------------------------------------------------------------------------------

function retornaQuantidadeElementos(array) {
   return array.length
}

//Exercício 6-----------------------------------------------------------------------------------------

function retornaExpressoesBooleanas() {
   const booleano1 = true
   const booleano2 = false
   const booleano3 = !booleano2
   const booleano4 = !booleano3
   let respostasBooleanas = []
   respostasBooleanas.push(booleano1 && booleano2 && !booleano4)
   respostasBooleanas.push((booleano1 && booleano2) || !booleano3)
   respostasBooleanas.push((booleano2 || booleano3) && (booleano4 || booleano1))
   respostasBooleanas.push(!(booleano2 && booleano3) || !(booleano1 && booleano3))
   respostasBooleanas.push(!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3))

   return respostasBooleanas
}

//Exercício 7-----------------------------------------------------------------------------------------

function retornaNNumerosPares(n) {
   let arrayPares = []
   for (i = 0; i <= (2 * n) - 1; i++) {
      if (i % 2 === 0) {
         arrayPares.push(i)
      }
   }
   return arrayPares
}

// Exercício 8-----------------------------------------------------------------------------------------

function checaTriangulo(a, b, c) {
   if (a === b && a === c) {
      return `Equilátero`
   } else if (a === b || b === c || a === c) {
      return `Isósceles`
   } else if (a != b && b != c && a != c) {
      return `Escaleno`
   }
}

// Exercício 9-----------------------------------------------------------------------------------------

function comparaDoisNumeros(num1, num2) {
   let propriedadesNumero = {
      maiorNumero: num1,
      maiorDivisivelporMenor: true,
      diferenca: 0
   }
   let menorNumero = num2
   if (num2 > num1) {
      propriedadesNumero.maiorNumero = num2;
      menorNumero = num1;
   }
   propriedadesNumero.maiorDivisivelporMenor = (propriedadesNumero.maiorNumero % menorNumero === 0)
   propriedadesNumero.diferenca = propriedadesNumero.maiorNumero - menorNumero

   return propriedadesNumero
}

// Exercício 10-----------------------------------------------------------------------------------------

function segundoMaiorEMenor(array) {
   let maior = retornaMaiorNumero(array)
   let menor = array[0]
   let arraySegundoMaiorMenor = []
   arraySegundoMaiorMenor[0] = array[0]
   arraySegundoMaiorMenor[1] = array[1]

   for (i = 0; i < array.length; i++) {
      if (array[i] < maior && array[i] > arraySegundoMaiorMenor[0]) {
         arraySegundoMaiorMenor[0] = array[i]
      } else if (array[i] > menor && array[i] < arraySegundoMaiorMenor[1]) {
         arraySegundoMaiorMenor[1] = array[i]
      }
   }
   return arraySegundoMaiorMenor
}

//Exercício 11-----------------------------------------------------------------------------------------

function ordenaArray(array) {
   let auxiliarSalvaNumeros
   for (i = 0; i < array.length; i++) {
      for (j = 0; j < array.length; j++) {
         if (array[i] < array[j]) {
            auxiliarSalvaNumeros = array[i]
            array[i] = array[j]
            array[j] = auxiliarSalvaNumeros
         }
      }
   }
   return array
}

// Exercício 12-----------------------------------------------------------------------------------------

function filmeFavorito() {
   let filme = {
      nome: `O Diabo Veste Prada`,
      ano: 2006,
      diretor: `David Frankel`,
      atores: [ `Meryl Streep`, `Anne Hathaway`, `Emily Blunt`, `Stanley Tucci`]
   }
   return filme
}

// Exercício 13-----------------------------------------------------------------------------------------

function imprimeChamada() {
   return (`Venha assistir ao filme ${filmeFavorito().nome}, de ${filmeFavorito().ano}, dirigido por ${filmeFavorito().diretor} e estrelado por ${filmeFavorito().atores[0]}, ${filmeFavorito().atores[1]}, ${filmeFavorito().atores[2]}, ${filmeFavorito().atores[3]}.`)
}

// Exercício 14-----------------------------------------------------------------------------------------

function criaRetangulo(lado1, lado2) {
   const triangulo = {
      largura: lado1,
      altura: lado2,
      perimetro: (2*(lado1 + lado2)),
      area: (lado1 * lado2)
   }
   return triangulo
}

// Exercício 15-----------------------------------------------------------------------------------------

function anonimizaPessoa(pessoa) {
   const identidade = {
      nome: "Astrodev",
      idade: 25,
      email: "astrodev@future4.com.br",
      endereco: "Rua do Futuro, 4"
   }
   const novaIdentidade = {
      ...identidade,
      nome: "ANÔNIMO"
   }
   return novaIdentidade
}

// Exercício 16-----------------------------------------------------------------------------------------

const arrayDePessoas = [
   { nome: "Pedro", idade: 20 },
   { nome: "João", idade: 10 },
   { nome: "Paula", idade: 12 },
   { nome: "Artur", idade: 89 }
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   const adultos = arrayDePessoas.filter((indice) => {
      return indice.idade >= 20
   })
   return adultos
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   const crianca = arrayDePessoas.filter((indice) => {
      return indice.idade < 20
   })
   return crianca
}

//Exercício 17-----------------------------------------------------------------------------------------
// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   let arrayMultiplicado = []
   for(i=0; i<array.length; i++){
      arrayMultiplicado.push(array[i]*2)
   }
   return arrayMultiplicado
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
   let arrayDeString = []
   const arrayNumerosPorDois = multiplicaArrayPor2(array)
   for(i=0; i<array.length; i++) {
      arrayDeString.push(arrayNumerosPorDois[i].toString())
   }
   return arrayDeString
}

// Exercício 17, letra C

function verificaParidade(array) {
   let arrayString = []
   for(i=0; i<array.length; i++) {
      if(array[i] % 2 === 0) {
         arrayString.push(`${array[i]} é par`)
      } else {
         arrayString.push(`${array[i]} é ímpar`)
      }
   }
   return arrayString
}

// Exercício 18-----------------------------------------------------------------------------------------

const pessoas = [
   { nome: "Paula", idade: 12, altura: 1.8 },
   { nome: "João", idade: 20, altura: 1.3 },
   { nome: "Pedro", idade: 15, altura: 1.9 },
   { nome: "Luciano", idade: 22, altura: 1.8 },
   { nome: "Artur", idade: 10, altura: 1.2 },
   { nome: "Soter", idade: 70, altura: 1.9 }
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   const pessoasAutorizadas = pessoas.filter((index) => {
      return index.idade > 14 && index.idade < 60 && index.altura >= 1.5
   })
   return pessoasAutorizadas
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   // implemente sua lógica aqui
}

//Exercício 19

const consultasNome = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia", dataDaConsulta: "04/05/2021" }
]

//Exercício 19, letra A

function ordenaPorNome() {

}

// Exercício 19, letra B

const consultasData = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia", dataDaConsulta: "04/05/2021" }
]

function ordenaPorData() {

}

//Exercício 20

const contas = [
   { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
   { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
   { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
   { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
   { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
   { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
   // implemente sua lógica aqui
}