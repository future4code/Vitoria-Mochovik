// QUESTÃO 02

//A

type Estatisticas = {
    maior: number,
    menor: number,
    media: number
}

function getStatistics(numeros: number[]): Estatisticas {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }


    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}


//B

function getStatisticsB(numeros: number[]): Estatisticas {

    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }


    const estatisticas: Estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}


//C

type AgeSample = {
    numbers: number[],
    getStatistics: (numbers: number[]) => Estatisticas
}

const ageSample: AgeSample = {
    numbers: [21, 47, 55, 12, 5, 74],
    getStatistics
}