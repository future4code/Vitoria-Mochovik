// DESAFIO 02 - QUESTÃO 06

import { DEFAULT_ECDH_CURVE } from "tls"

enum IDADE_HISTORICA_SIGLA {
    AC = "AC",
    DC = "DC"
}

enum IDADE_HISTORICA {
    PRE_HISTORIA = "Pré-história",
    IDADE_ANTIGA = "Idade Antiga",
    IDADE_MEDIA = "Idade Média",
    IDADE_MODERNA = "Idade Moderna",
    IDADE_CONTEMPORANEA = "Idade Contemporânea"
}

const ano = Number(process.argv[2])
const sigla = process.argv[3] as IDADE_HISTORICA_SIGLA

function verificaIdadeHistorica(
    ano: number,
    sigla: IDADE_HISTORICA_SIGLA = IDADE_HISTORICA_SIGLA.DC
): IDADE_HISTORICA | void {
    if(isNaN(ano)) {
        return console.log("Ano invalido! Por favor, digite um numero!")
    }

    switch (sigla.toUpperCase()) {
        case IDADE_HISTORICA_SIGLA.AC:
            if(ano < 4000){
                return IDADE_HISTORICA.PRE_HISTORIA
            } else {
                return IDADE_HISTORICA.IDADE_ANTIGA
            }
        case IDADE_HISTORICA_SIGLA.DC:
            if(ano < 476) {
                return IDADE_HISTORICA.IDADE_ANTIGA
            }
            if(ano < 1453) {
                return IDADE_HISTORICA.IDADE_MEDIA
            }
            if(ano < 1789) {
                return IDADE_HISTORICA.IDADE_MODERNA
            } else {
                return IDADE_HISTORICA.IDADE_CONTEMPORANEA
            }
        default:
            console.log("Sigla inválida")
    }
}


const result = verificaIdadeHistorica(ano, sigla)
result && console.log(result)
