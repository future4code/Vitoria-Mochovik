import { render } from '@testing-library/react'
import React from 'react'
import styled from 'styled-components';

const ContainerForm = styled.div`
    background-color: #836FFF;
    display: flex;
    flex-direction: column;
    align-items: center;
   
   
`

const ContainerQuadro = styled.div`
    background-color: white;
    width: 400px;
    height: 400px;
    margin: 15px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    box-shadow: 0 0 1em black;



`



export default function Etapa1() {
    return (
        <ContainerForm>
            <ContainerQuadro>
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
            </ContainerQuadro>
        </ContainerForm>
    );
}