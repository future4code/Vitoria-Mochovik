import styled from 'styled-components'

export const CardViagem = styled.div`
    position: absolute;
    left:0;
    top:0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-between;
    width: 100%;
    height: 100%;
    background-position:center;
    background-size:cover;
`

export const ContainerCard = styled.div`
    background-color: #EBEBF2; 
    height:350px;  
    width: 220px;
    position: relative;
    margin: 10px;
    text-align: center;
    box-shadow: 1px 2px 5px #404040;
`

export const CardInformation = styled.div`
    z-index: 1;
    opacity:0;
    top:0;
    left: 0;
    width:100%;
    height:100%;
    background:#FFC09D;
    transition: all .2s;
    position: relative;
    display:flex;
    justify-content: center;
    flex-direction:column;
    transform: scale(0.9);
    &:hover{
        opacity:1;
        transform: scale(1);
        cursor: pointer;
    }
`

export const ImgPlanet = styled.img`
    width: 100%;
    height: 200px;
`
    
export const ContainerCards = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0px 20px 0px 20px;

`

export const Button = styled.button`
    
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
export const ContainerButton = styled.div`
    p{
        margin: 0px;
    }
    
    display: flex;
    justify-content: flex-end;
    top: 10px;
    right: 10px;
    position: absolute;

`

export const ContainerNumbers = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
    

`

export const Pexcluir = styled.p`
    color: #343B45;
    font-weight: bold;
    border-radius: 100%;
    border: 2px solid #343B45;
    padding: 5px;
    :hover {
        opacity: 35%;
        cursor: pointer;
    }

`

export const ButtonExcluir = styled.button`
    
    margin-bottom: 15px;
    height: 25px;
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

export const Titulo = styled.div`
    display: flex;
    justify-content: center;
    font-size: 30px;

`