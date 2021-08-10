// QUESTÃO 03

let toDoList = ["Assistir aula", "Fazer um bom projeto"]
const assignment = process.argv[2]
toDoList.push(assignment)

console.log("Tarefa adicionada com sucesso!")
console.table(toDoList)
console.log('Se sua atividade apareceu separada, escreva entre aspas, assim: "varrer a casa" ')