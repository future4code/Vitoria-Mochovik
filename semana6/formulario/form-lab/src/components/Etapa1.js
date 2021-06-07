import { render } from '@testing-library/react'
import React from 'react'

export default function Etapa1() {
    return (
        <div>
            <h1> ETAPA 1 - DADOS GERAIS</h1>
            <p>1. Qual seu nome?</p>
            <input placeholder/>
            <p> 2. Qual a sua idade?</p>
            <input placeholder/>
            <p> 3. Qual o seu email?</p>
            <input placeholder/>
            <p> 4. Qual a sua escolaridade?</p>
            <select> 
                <option value="">Ensino médio incompleto</option>
                <option value="">Ensino médio completo</option>
                <option value="">Ensino superior incompleto</option>
                <option value="">Ensino superior completo</option>
            </select>
            
        </div>
    );
}