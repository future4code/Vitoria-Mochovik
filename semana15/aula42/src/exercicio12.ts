//DESAFIO 08 QUESTÃO 12
import { calculaFatorial } from './exercicio11'

//A- Quantidade de anagramas de uma palavra sem nenhuma letra repetida 

function calcAnagrama(str: string): number | string {
    return calculaFatorial(str.length)
}

console.log("Mesa")
console.log(calcAnagrama("mesa"))

//B - Quantidade de anagramas de uma palavra com letras repetidas

function calcLetrasRepetidas(str: string): number | string {
    if(typeof str !== "string") {
        return "String invalida!!"
    }

    type Obj = {
        [key: string]: number
    }

    let obj: Obj = {}
    let letrasRepetidas = 1

    for(let i =0; i < str.length; i++){
        if(obj[str[i]]){
            obj = {...obj, [str[i]]: obj[str[i]] + 1}
            letrasRepetidas += 1
        } else {
            obj = {...obj, [str[i]]: 1}
        }
    }
    return letrasRepetidas
}

function calcAnagramaB(str: string): number | string{
    const totalLetrasFatoradas = calculaFatorial(str.length)
    const letrasRepetidas = calcLetrasRepetidas(str)

    if(typeof letrasRepetidas !== "number"){
        return letrasRepetidas
    }

    const fatorialLetrasRepetidas = calculaFatorial(letrasRepetidas)

    if(typeof totalLetrasFatoradas !== "number"){
        return totalLetrasFatoradas
    }

    if(typeof fatorialLetrasRepetidas !== "number"){
        return fatorialLetrasRepetidas
    }

    return totalLetrasFatoradas/fatorialLetrasRepetidas
}

console.log("Anagrama")
console.log(calcAnagramaB("Anagrama"))