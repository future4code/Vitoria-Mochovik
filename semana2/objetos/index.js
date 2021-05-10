//------------------Exercício de interpretação de código--------------------------

//EXERCÍCIO 01--------------------------------------------------------------------

//Matheus Nachtergaele
//Virginia Cavendish
//{ canal: 'Globo', horario: '14h' }

//EXERCÍCIO 02--------------------------------------------------------------------

/*
2A
Nada será impresso no console já que temos um erro em 'const tartaruga = ...',
pois não consigo usar o método 'replaceAll()' dessa forma.

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
    ...pessoa
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