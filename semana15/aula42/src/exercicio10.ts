//DESAFIO 06 QUESTÃO 10

const entrada: string = process.argv[2]

function inverteString(str: string) : string {
    if(typeof str !== "string"){
        return "Entrada invalida! Digite uma palavra!"
    }

    let revertStr = ""
    for(let i = str.length - 1; i >= 0; i--){
        revertStr += str[i]
    }

    return revertStr
}

console.log(inverteString(entrada))