import { render } from '@testing-library/react'
import React from 'react'

export default function Etapa1() {
    return (
        <div>
            <h1> ETAPA 1 - DADOS GERAIS</h1>
            <p>1. Qual seu nome?</p>
            <input> </input>
            <p> 2. Qual a sua idade?</p>
            <input></input>
            <p> 3. Qual o seu email?</p>
            <input> </input>
            <p> Qual a sua escolaridade?</p>

            <button> Próxima etapa</button>
        </div>
    );
}