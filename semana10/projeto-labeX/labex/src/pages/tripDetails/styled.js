import styled from 'styled-components'

export const ContainerMain = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

export const ContainerAprovados = styled.div`
    /* background-color: blue; */
    width: 40%;
    margin: 35px;
    border: 1px solid black;
`

export const ContainerPendentes = styled.div`
    /* background-color: red; */
    width: 80%;
    margin: 35px;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    align-items: center;

    

`

export const ContainerGeral = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 40px;
`

export const ContainerCard = styled.div`
    background-color: #EBEBF2; 
    
    height:300px;  
    width: 1000px;
    margin: 10px;
    text-align: center;
    box-shadow: 1px 2px 5px #404040;

    display: flex;
    justify-content: space-between;
`

export const CardCandidatos = styled.div`
    background-color: #EBEBF2; 
    
    height:100%;  
    width: 100%;
    margin: 10px;
    padding: 10px;
    text-align: center;
    box-shadow: 1px 2px 5px #404040;
`

export const ContainerPend = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;


`

export const ImgPlanet = styled.img`
    width: 300px;
    height: 100%;
`

export const ContainerImg = styled.div`
    width: 30%;
`

export const ContainerViagem= styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

`