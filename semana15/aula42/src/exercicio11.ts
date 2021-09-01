//DESAFIO 07 QUESTÃO 11

export function calculaFatorial(num: number): number | string {
    if(typeof num !== "number") {
        return "Invalid number"
    }

    if(!Number.isInteger(num)) {
        return "O número precisa ser inteiro!!!"
    }

    if(num === 0){
        return 1
    }

    let result = 1

    for(let i = num; i > 0; i--){
        result *= i
    }

    return result
}

const input = Number(process.argv[2])
console.log(calculaFatorial(input))