import { render } from '@testing-library/react'
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


export default function Etapa2() {
    return (
        <ContainerForm>
            <ContainerQuadro>
                <h1> ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
                <p> 5. Qual curso?</p>
                <input placeholder />
                <p> 6. Qual a unidade de ensino?</p>
                <input placeholder/>
            </ContainerQuadro>
        </ContainerForm>
    )
}