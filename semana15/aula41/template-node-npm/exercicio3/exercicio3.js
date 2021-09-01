// QUESTÃO 03


if(process.argv.length < 3){
    console.log("Esperava ao menos 1 argumento")
    process.exit()
}

let fs = require("fs")
const toDoList = JSON.parse(fs.readFileSync('lista.txt').toString())

for(let i=2; i<process.argv.length; i++){
    toDoList.push(process.argv[i])
}


console.log("Tarefa adicionada com sucesso!")
console.table(toDoList)
console.log('Se sua atividade apareceu separada, escreva entre aspas, assim: "varrer a casa" ')

fs.writeFile("lista.txt", JSON.stringify(toDoList), function(err, file){
    if(err) throw err
})