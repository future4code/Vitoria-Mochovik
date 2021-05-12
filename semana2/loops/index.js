//---------------------Exercício de interpretação de código------------------------------

//EXERCÍCIO 01---------------------------------------------------------------------------

/*

Basicamente o código conta com uma variável do tipo let chamada `valor` que é atribuido o 
valor 0. Então o programa entra em um laço de for que fica de i = 0 até i = 4, e cada vez 
que passar por esse for será somado o valor de `i` ao valor da variável `valor`.
->Primeira vez no for 
i = 0
valor = 0
valor = valor + i
valor = 0 + 0 = 0

->Segunda vez no for
i = 1
valor = 0
valor = valor + i
valor = 0 + 1 = 1

->Terceira vez no for
i = 2
valor = 1
valor = valor + i
valor = 1 + 2 = 3

->Quarta vez no for
i = 3
valor = 3
valor = valor + i
valor = 3 + 3 = 6

->Quinta vez no for
i = 4
valor = 6
valor = valor + i
valor = 6 + 4 = 10 

O resultado visto no console será:
10

*/

//EXERCÍCIO 02---------------------------------------------------------------------------

/*

2A
Será impresso no console:
19
21
23
25
27
30

2B
Eu consigo sim acessar o ìndice de cada elemento criando uma variável auxiliar (como faço 
no exemplo abaixo), essa variável serve para mim como um contador que me ajuda a identificar 
qual a posição de cada elemento.
Exemplo:

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]

let indice = 0
for (let numero of lista) {
    console.log(`O número ${numero} está na posição ${indice}`)
    indice += 1
  if (numero > 18) {
		//console.log(numero)
	}
}

*/

