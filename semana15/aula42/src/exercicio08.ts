//DESAFIO 04 QUESTÃO 08

import { copyFileSync } from "fs"

type Prato = {
    nome: string,
    custo: number,
    valorVenda: number,
    ingredientes: string[] 
}

type Venda = {
    nome: string,
    cliente: string,
}

// a) Escreva uma função que permita cadastrar um produto. Salve os produtos em um array no escopo global.

const pratos: Prato[] = []

function cadastrarProduto(produto: Prato): void {
    pratos.push(produto)
    console.log("Pratos")
    console.table(pratos)
}

const novoProduto: Prato = {
    nome: process.argv[2],
    custo: Number(process.argv[3]),
    valorVenda: Number(process.argv[4]),
    ingredientes: []

}

const numeroIngredientes = process.argv.length - 5
for( let i = 0; i < numeroIngredientes; i++) {
    novoProduto.ingredientes.push(process.argv[5 + i])
}

cadastrarProduto(novoProduto)

//b) Escreva uma função que recebe um nome e devolve o valor do produto com este nome.

function verificaValorProduto(nome: string) : number | void {
    for(let prato of pratos) {
        if(prato.nome === nome){
            return prato.valorVenda
        }
    }
    console.log("Prato não encontrado")
}

console.log(`Preço de ${novoProduto.nome}= ${verificaValorProduto(novoProduto.nome)}`)


//c) Escreva uma função para que ele venda um prato. Salve as vendas em um array no escopo global.

const vendas: Venda[] = []

function vendePrato(nome: string, cliente: string): Venda | void {
    for(let i = 0; i <pratos.length; i++){
        if(pratos[i].nome === nome){
            const novaVenda: Venda = {
                nome: pratos[i].nome,
                cliente
            }  
            vendas.push(novaVenda)
            return novaVenda  
        }   
    }
    console.log("Prato da venda não encontrado")
}

vendePrato("strogonoof", "fulano")
console.log("Vendas")
console.table(vendas)

// d) Escreva uma função que determine o lucro do restaurante. 

function calculaLucro(): number | void {
    if(vendas.length < 1){
        console.log("Nenhuma venda realizada até o momento :(")
        return 0
    }

    let lucro = 0

    function pegarPrato(venda: Venda): Prato | void{
        for (let prato of pratos){
            if(prato.nome === venda.nome){
                return prato
            }
        }
    }

    for (let venda of vendas) {
        const prato = pegarPrato(venda)

        if(prato) {
            lucro -= prato.custo
            lucro += prato.valorVenda
        }
    }

    return lucro
}

console.log(`Lucro = ${calculaLucro()}`)

