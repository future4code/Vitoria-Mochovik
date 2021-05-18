//----------------------Exercícios de interpretação de código-------------------------------------

//EXERCÍCIO 01------------------------------------------------------------------------------------

/*
Será impresso no console:
{ nome: 'Amanda Rangel', apelido: 'Mandi' } 0 [
{ nome: 'Amanda Rangel', apelido: 'Mandi' },
{ nome: 'Laís Petra', apelido: 'Laura' },
{ nome: 'Letícia Chijo', apelido: 'Chijo' }
]
{ nome: 'Laís Petra', apelido: 'Laura' } 1 [
{ nome: 'Amanda Rangel', apelido: 'Mandi' },
{ nome: 'Laís Petra', apelido: 'Laura' },
{ nome: 'Letícia Chijo', apelido: 'Chijo' }
]
{ nome: 'Letícia Chijo', apelido: 'Chijo' } 2 [
{ nome: 'Amanda Rangel', apelido: 'Mandi' },
{ nome: 'Laís Petra', apelido: 'Laura' },
{ nome: 'Letícia Chijo', apelido: 'Chijo' }
]
 
*/

//EXERCÍCIO 02------------------------------------------------------------------------------------

/*
Será impresso no console:
[ 'Amanda Rangel', 'Laís Petra', 'Letícia Chijo' ]
*/

//EXERCÍCIO 03------------------------------------------------------------------------------------  

/*
Será impresso no console:
[
  { nome: 'Amanda Rangel', apelido: 'Mandi' },
  { nome: 'Laís Petra', apelido: 'Laura' }
]
*/

//----------------------Exercícios de escrita de código-------------------------------------------

//EXERCÍCIO 01------------------------------------------------------------------------------------  

/*
const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]

const nomeDogs = pets.map((item, array) => {
    return item.nome
})


const salsichaDogs = pets.filter((item, array) => {
    return item.raca === "Salsicha"
})

const mensagemPoodle = pets.filter((item, array) => {
    return item.raca === "Poodle"

}).map((item) => {
    return (`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome} !`) 
})

function imprime(arrayObject) {
    for(i=0; i<= arrayObject.length -1; i++) {
         console.log(arrayObject[i])
    }
}

console.log("Os nomes dos dogs são:")
imprime(nomeDogs)

console.log("Os dogs da raça salsicha são:")
imprime(salsichaDogs)
imprime(mensagemPoodle)
*/

//EXERCÍCIO 02------------------------------------------------------------------------------------  

/*

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

const nomeItens = produtos.map((item) => {
    return item.nome
})

const nomePrecoDesconto = produtos.map((item) => {
    return { ...item, preco: (item.preco * 0.95).toFixed(2) }
})

const stringsPrecoDesconto = nomePrecoDesconto.map((item) => {
    return (`Nome: ${item.nome}, preço: ${item.preco}`)
})

const apenasBebidas = produtos.filter((item) => {
    return item.categoria === "Bebidas"
})

const stringsApenasBebidas = apenasBebidas.map((item) => {
    return (`Nome: ${item.nome}, categoria: ${item.categoria}, preço: ${item.preco}`)
})

const apenasYpe = produtos.filter((item) => {
    return item.nome.includes("Ypê")
})

const stringApenasYpe = apenasYpe.map((item) => {
    return (`Nome: ${item.nome}, categoria: ${item.categoria}, preço: ${item.preco}`)
})

const stringAnuncioApenasYpe = apenasYpe.map((item) => {
    return (`Compre ${item.nome} por R$${item.preco}`)
})

function imprimeValores(array) {
    for(i=0; i<= array.length-1; i++) {
        console.log(array[i])
    }
}

console.log(" \n Apenas o nome de cada item:")
imprimeValores(nomeItens)

console.log(" \n Itens com preço de desconto:")
imprimeValores(stringsPrecoDesconto)

console.log(" \n Apenas a categoria de bebidas:")
imprimeValores(stringsApenasBebidas)

console.log(" \n Apenas produtos da marca Ypê:")
imprimeValores(stringApenasYpe)

console.log(" \n Frase com Ypê:")
imprimeValores(stringAnuncioApenasYpe)

*/


//----------------------------------Desafios----------------------------------------------------

//DESAFIO 01------------------------------------------------------------------------------------  

/* 
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

 const ordemAlfabetica = pokemons.sort((a, b) => {
     if(a.nome > b.nome) {
         return 1;
     }
     if (a.nome <b.nome) {
         return -1;
     }
 })
 
const tiposApenas = pokemons.map((item) => {
    return item.tipo
})

const tiposSemRepeticao = tiposApenas.filter((item, index, self) => {
    return self.indexOf(item) === index

})

function imprime(array) {
    for(i=0; i<= array.length -1; i++) {
        console.log(array[i])
    }
}

imprime(ordemAlfabetica)
imprime(tiposSemRepeticao)

*/