import styled from 'styled-components'

export const ContainerGeral = styled.div`
    box-shadow: 0 0 3px #765441;
    background-color: white;
    display: flex;
    justify-content: space-between;
    position: sticky;
    align-items: center;
    width: 100%;
    height: 80px;
    top: 0;
    right: 0;
    margin-bottom: 15px;

`

export const ImgLogo = styled.img`
    width: 50px;
  
`

export const ImgTitulo = styled.img`
    width: 80px;
    margin-left: 10px;
    
`

export const ContainerMarca = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 25px;
    
   
    
`

export const Button = styled.button`
    height: 30px;
    width: 130px;
    margin-right: 25px;
    border-radius: 30px;
    
    border: 2px solid #8682CE;
    color: #8682CE;
    background-color: transparent;
    font-size: 15px;
    font-weight: bold;
    font-family: Noto Sans,Arial,sans-serif;
    text-align: center;

    &:hover{
        cursor: pointer;
        background-color: #8682CE;
        color: white;
    }
`