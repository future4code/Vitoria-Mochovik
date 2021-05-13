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

