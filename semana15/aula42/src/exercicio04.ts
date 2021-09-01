//QUESTÃO 04

type pokemon = {
	name: string,
        types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

//A

/*
    Rodaria os comandos:
    -> npm install -g typescript
    -> tsc ./exercicio04.ts
    -> npm install typescript -D
    -> npx tsc ./exercicio04.ts
*/

//B

/*
    Rodaria os comandos:
    -> npm install -g typescript
    -> tsc ./src/exercicio04.ts
    -> npm install typescript -D
    -> npx tsc ./src/exercicio04.ts

*/

//C

/*
    Sim, configurando o tsconfig para olhar a pasta 
    de entrada rootDir e a pasta de saída outDir.
    Rodaria:
    -> npm install -g typescript
    -> tsc
    -> npm install typescript -D
    -> npx tsc

*/

//D


/*
    O outDir, rootDir e es6. 
    Existem diversas configs comentadas, cada uma com uma funcionalidade.
    
*/