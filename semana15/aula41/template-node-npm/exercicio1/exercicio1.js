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
  console.log("\033[1;35m" + ` Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${age + 7}`)  
} else if ( !name  && !age ) {
    console.log("\033[31m" + "Por favor, digite primeiro seu nome depois a idade")
} else if((!name && age) || (!age && name)) {
    console.log("\033[31m" + "Preciso de dois parametro!" +" \033[1;32m" +" Por favor, digite seu nome e em seguida sua idade")
} 
