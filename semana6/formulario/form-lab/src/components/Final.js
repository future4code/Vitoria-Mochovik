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
    align-items: center;
    ;
`

const Descricao = styled.p `
    text-align: center;
   
`
export default function Final() {
    return (
        <ContainerForm>
            <ContainerQuadro>
                <h1> O FORMULÁRIO ACABOU</h1>
                <Descricao> Muito obrigado por participar! <br/> Entraremos em contato!</Descricao>
            </ContainerQuadro>
        </ContainerForm>
    )
}