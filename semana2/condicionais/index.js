//---------------------Exercícios de interpretação de código---------------------------------

//EXERCÍCIO 01-------------------------------------------------------------------------------

/*

1A
O programa solicita ao usuário um número, o código transforma essa entrada que esta em string
em número, com o comando `Number()`. Feito isso o programa verifica se o valor inserido é um par, 
ou seja, se o resto da divisão dele por 2 for igual a 0 significa que é par e então o programa 
imprime no console: "Passou no teste", caso contrário, ele imprime "Não passou no teste".

1B
Ele imprime no console "Passou no teste" para todos os valores que passarem no teste de ter o 
resto da divisão por 2 igual à zero, ou seja, todos os valores que são pares.

1C
Ele imprime no console "Não passou no teste" para todos os valores que não passarem no teste,
todos que o resto da divisão por 2 for diferente de 0, ou seja, todos que forem ímpares.

*/

//EXERCÍCIO 02-------------------------------------------------------------------------------

/*

2A
O código serve para mostrar ao usuário o valor da fruta que ele escolher, ou seja, o programa 
analisa 4 frutas diferentes, para cada uma temos um preço diferente, então conforme a fruta 
digitada pelo usuário, a variável preço muda seu valor, e caso a fruta do usuário não seja 
nenhuma das quatro (laranja, maçã, uva ou pêra), o preço terá o valor único de 5. Por fim, o 
porgrama imprime no console qual fruta o usuário escolheu e qual o seu preço.

2B
O preço da fruta Maçã é R$ 2.25

2C
Quando retiramos o `break` o código não sai do nosso `switch`, ele continua rodanda linha por 
linha mesmo que nossa condição já tenha sido encontrada, ou seja, nesse caso ele atribui o 
valor 5.5 a variável `preco` mas acaba entrando no caso `default` e mudando o valor do `preco` 
para 5. Por fim será impresso no console:
O preço da fruta  Pêra  é  R$  5

*/

//EXERCÍCIO 03-------------------------------------------------------------------------------

/*

3A
A primeira linha pede ao usuário para digitar um primeiro número, que é convertido de string 
para número e salvo na variável constante chamada de `numero`.

3B
Para o valor 10, será impresso no console:
Esse número passou no teste
Mensagem de erro: mensagem is not defined

Para o valor -10, será impresso no console:
Mensagem de erro: mensagem is not defined

3C
Sim, pois a variável mensagem foi declarada apenas dentro do escopo `if` nesse caso não posso 
acessar ela como se fosse uma variável global fora desse escopo. Resumindo, o que está declarado 
na parte global podemos acessar dentro de outros escopos, o contrário não é permitido. Não 
podemos acessar no global o que foi definido dentro de um escopo.

*/

//---------------------Exercícios de escrita de código---------------------------------

//EXERCÍCIO 01-------------------------------------------------------------------------------

/*

const idade = Number(prompt("Qual a sua idade?"))

if (idade >= 18) {
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir ainda, poderá em", 18 - idade, "anos.")
}

*/

//EXERCÍCIO 02-------------------------------------------------------------------------------

/*

const turnoEstuda = prompt("Qual turno você estuda? Digite M para matutino, V para vespertino ou N para noturno")

if (turnoEstuda.toUpperCase() === "M") {
    console.log("Bom dia!")
} else if (turnoEstuda.toUpperCase() === "V") {
    console.log("Boa tarde!")
} else if (turnoEstuda.toUpperCase() === "N") {
    console.log("Boa noite!")
}

*/

//EXERCÍCIO 03-------------------------------------------------------------------------------

/*

const turnoEstuda = prompt("Qual turno você estuda? Digite M para matutino, V para vespertino ou N para noturno")

switch (turnoEstuda.toUpperCase()) {
    case "M":
        console.log("Bom dia!")
        break;
    case "V":
        console.log("Boa tarde!")
        break;
    case "N":
        console.log("Boa noite!")
        break;
    default:
        console.log("Não consigo indentificar o turno do dia!")
        break;
}

*/

//EXERCÍCIO 04-------------------------------------------------------------------------------

/*

const generoFilme = prompt("Qual gênero de filme você vai assistir?")
const valorIngresso = prompt("Qual o valor do ingresso?")

if (generoFilme.toLocaleLowerCase() === "fantasia" && valorIngresso < 15) {
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
}

*/

//---------------------Desafios------------------------------------------------------------

//DESAFIO 01-------------------------------------------------------------------------------

/* 

const generoFilme = prompt("Qual gênero de filme você vai assistir?")
const valorIngresso = prompt("Qual o valor do ingresso?")


if (generoFilme.toLocaleLowerCase() === "fantasia" && valorIngresso < 15) {
    const lanchinho = prompt("Qual lanche você deseja comprar?")

    console.log("Bom filme!")
    if (lanchinho.substr(lanchinho.length - 1) === "a") {
        console.log(`Aproveite a sua ${lanchinho}`)
    } else {
        console.log(`Aproveite o seu ${lanchinho}`)
    }
} else {
    console.log("Escolha outro filme :(")
}

*/

//DESAFIO 02-------------------------------------------------------------------------------

/*

const nomeCompleto = prompt("Qual seu nome completo?")
const tipoDeJogo = prompt("Qual o tipo de jogo? Digite internacional ou doméstico")
const etapaDoJogo = prompt("Qual a etapa do jogo? Digite semi-final, decisão para decisão de terceiro lugar ou final")
const categoria = prompt("Qual a categoria? 1, 2, 3, ou 4")
const quantidadeDeIngressos = prompt("Quantos ingressos deseja comprar?")
let valorIngresso = 0
let valorIngressoFinal = 0

switch (etapaDoJogo.toUpperCase(), categoria) {
    case "SEMI-FINAL", "1":
        valorIngresso = 1320.00
        break;
    case "SEMI-FINAL", "2":
        valorIngresso = 880.00
        break;
    case "SEMI-FINAL", "3":
        valorIngresso = 550.00
        break;
    case "SEMI-FINAL", "4":
        valorIngresso = 220.00
        break;
    case "DECISÃO", "1":
        valorIngresso = 660.00
        break;
    case "DECISÃO", "2":
        valorIngresso = 440.00
        break;
    case "DECISÃO", "3":
        valorIngresso = 330.00
        break;
    case "DECISÃO", "4":
        valorIngresso = 170.00
        break;
    case "FINAL", "1":
        valorIngresso = 1980.00
        break;
    case "FINAL", "2":
        valorIngresso = 1320.00
        break;
    case "FINAL", "3":
        valorIngresso = 880.00
        break;
    case "FINAL", "4":
        valorIngresso = 330.00
        break;
    default:
        alert("Não temos essa opção :(")
        break;
}

if (tipoDeJogo.toUpperCase() === "INTERNACIONAL") {
    valorIngresso = valorIngresso*4.10
    valorIngressoFinal = valorIngresso*quantidadeDeIngressos
} else {
    valorIngressoFinal = valorIngresso*quantidadeDeIngressos
}


console.log(
    `---Dados da compra---
    Nome do cliente: ${nomeCompleto}
    Tipo de jogo: ${tipoDeJogo}
    Etapa do jogo: ${etapaDoJogo}
    Categoria: ${categoria}
    Quantidade de Ingressos: ${quantidadeDeIngressos}
    ---Valores---
    Valor do ingresso: ${valorIngresso}
    Valor total: ${valorIngressoFinal}`
)

*/