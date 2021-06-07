import React from 'react'
import styled from 'styled-components'

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



export default function Etapa3() {
    return(
        <ContainerForm>
            <ContainerQuadro>
                <h1> ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO </h1>
                <p> 5. Por que você não terminou um curso de graduação?</p>
                <input placeholder/>
                <p> 6. Você fez algum curso complementar?</p>
                <select> 
                    <option value="">Nenhum</option>
                    <option value="">Curso técnico</option>
                    <option value="">Curso de inglês</option>
                </select>
            </ContainerQuadro>
        </ContainerForm>
    )
}