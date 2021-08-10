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

if (name && age ) {
  console.log(`Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${age + 7}`)  
} else if ( !name  && !age ) {
    console.log("Por favor, digite primeiro seu nome depois a idade")
} else if((!name && age) || (!age && name)) {
    console.log("Preciso de dois parametro! Por favor, digite seu nome e em seguida sua idade")
} 
