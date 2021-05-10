//------------------Exercício de interpretação de código--------------------------

//EXERCÍCIO 01--------------------------------------------------------------------

//Matheus Nachtergaele
//Virginia Cavendish
//{ canal: 'Globo', horario: '14h' }

//EXERCÍCIO 02--------------------------------------------------------------------

/*
2A
{ nome: "Juca", idade: 3, raca: "SRD" }
{ nome: "Juba", idade: 3, raca: "SRD" }
{ nome: "Jubo", idade: 3, raca: "SRD" }

2B
Os três pontos fazem uma cópia completa do objeto mencionado para outro objeto,
e isso nos permite mudar ou adicionar algumas propriedades referente ao objeto copiado.

*/

//EXERCÍCIO 03--------------------------------------------------------------------

/*

3A
false
undefined

3B
Primeiro ele retorna 'false', pois enviamos para a função nosso objeto 'pessoa',
e a propriedade que queremos analisar (no primeiro caso 'backender'), já foi definida como 
uma booleada que para backender indica 'false'.
No segundo caso passamos como parâmetro para a função, uma propriedade que não existe em nosso objeto
'pessoa', por isso esse retorna 'undefined'.

*/

//------------------Exercício de escrita de código--------------------------------

//EXERCÍCIO 01--------------------------------------------------------------------

/*

const pessoa = {
    nome: "Vitória",
    apelidos: ["Vi", "Vivi", "Vih"],
}

function imprimeObjeto(pessoa) {
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]}, ou ${pessoa.apelidos[2]}.`)
}

imprimeObjeto(pessoa)

const novosApelidos = {
    ...pessoa,
    apelidos: ["Carol", "Carolina", "Viii"]
}

imprimeObjeto(novosApelidos)

*/

//EXERCÍCIO 02--------------------------------------------------------------------

/*

const pessoa = {
    nome: "Vitória",
    idade: 21,
    profissao: "Estudante",

}

const novaPessoa = {
    nome: "Julia",
    idade: 25,
    profissao: "Dentista"
}

function informacoes(pessoa, novaPessoa) {
    const arrayInformacoes = []
    arrayInformacoes[0] = pessoa.nome
    arrayInformacoes[1] = pessoa.nome.length
    arrayInformacoes[2] = pessoa.idade
    arrayInformacoes[3] = pessoa.profissao
    arrayInformacoes[4] = pessoa.profissao.length

    return arrayInformacoes
}

informacoes(pessoa, novaPessoa)

*/

//EXERCÍCIO 03--------------------------------------------------------------------

/*

const carrinho = []

const frutas = {
    nome: "Banana",
    disponibilidade: true,

}
const frutas02 = {
    nome: "Morango",
    disponibilidade: true,

}

const frutas03 = {
    nome: "Caju",
    disponibilidade: true,

}

function colocarCarrinho(fruta) {
    return carrinho.push(fruta)
}

colocarCarrinho(frutas)
colocarCarrinho(frutas02)
colocarCarrinho(frutas03)

console.log(carrinho)

*/

//------------------Desafios--------------------------------

//DESAFIO 01--------------------------------------------------------------------

/*

function perguntaUsuario() {
    const pessoa = {
    nome: prompt("Qual seu nome?"),
    idade: Number(prompt("Qual sua idade?")),
    profissao: prompt("Qual sua profissão?")
    }

    console.log(pessoa)
    console.log(typeof pessoa)
}

perguntaUsuario()

*/

//DESAFIO 02--------------------------------------------------------------------

/*

function comparaFilmes(filme1, filme2) {
    console.log("O primeiro filme foi lançado antes do segundo?", filme1.anoDeLancamento < filme2.anoDeLancamento)
    console.log("O primeiro filme foi lançado no mesmo ano do segundo?", filme1.anoDeLancamento === filme2.anoDeLancamento)

}

const filme1 = {
    nome: prompt("Digite o nome de um filme"),
    anoDeLancamento: Number(prompt("Qual o ano de lançamento do filme?")),
}
    

const filme2 = {
    nome: prompt("Digite o nome de um filme"),
    anoDeLancamento: Number(prompt("Qual o ano de lançamento do filme?")),

}

comparaFilmes(filme1, filme2)
*/


//DESAFIO 03--------------------------------------------------------------------

/*

const carrinho = []

const frutas = {
    nome: "Banana",
    disponibilidade: true,

}
const frutas02 = {
    nome: "Morango",
    disponibilidade: true,

}

const frutas03 = {
    nome: "Caju",
    disponibilidade: true,

}

function colocarCarrinho(fruta) {
    return carrinho.push(fruta)
}

function inverteDisponibilidade(fruta) {
    fruta.disponibilidade = !fruta.disponibilidade
}

colocarCarrinho(frutas)
colocarCarrinho(frutas02)
colocarCarrinho(frutas03)

console.log(carrinho)

inverteDisponibilidade(frutas)
console.log(`A fruta ${frutas.nome} está disponivel? ${frutas.disponibilidade}`)

*/