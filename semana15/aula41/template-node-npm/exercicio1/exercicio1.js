//QUESTÃO 01 

/*

A-  
    process.argv[2]
    process.argv[3]
    ...
    sempre a partir da posição 2 do array

*/

//B && C

const name = process.argv[2]
const age = Number(process.argv[3])

console.log(`Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${age + 7}`)