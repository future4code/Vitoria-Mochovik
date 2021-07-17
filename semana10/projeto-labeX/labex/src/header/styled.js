import styled from 'styled-components'

export const ContainerGeral = styled.div`
    background-color: #ffc09d;
    display: flex;
    justify-content: space-between;
    align-items: center;

`

export const ImgLogo = styled.img`
    width: 100px;
    margin: 10px 0px 10px 25px;
`

export const ImgText = styled.img`
    width: 100px;
`

export const ContainerButtons = styled.div`
    margin-right: 25px;
    

`

export const Button = styled.button`
    margin-left: 10px;
    margin-right: 30px;
    height: 35px;
    padding: 0px 15px;
    border: 2px solid #343B45;
    
    background-color: transparent;
    color: #343B45;
    font-weight: bold;
    :hover {
        opacity: 35%;
        cursor: pointer;
    }


`

export const ButtonDestaque = styled.button`
    margin-left: 10px;
    margin-right: 30px;
    height: 35px;
    padding: 0px 15px;
    border: 2px solid #343B45;
    
    background-color: #343B45;
    color: #FFC09D;
    font-weight: bold;
    :hover {
        opacity: 35%;
        cursor: pointer;
    }

`