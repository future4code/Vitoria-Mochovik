import styled from 'styled-components'

export const ImagePerson = styled.img`
    width: 100%;

`
export const Card = styled.div`
   
    filter: blur(30.2px);
    height: 100%;
    width: 100%;
    position: absolute;

    /* background-color: blue; */

`
export const CardPerfil = styled.div`
    
    margin: 15px;
    box-sizing: border-box;
    box-shadow: rgba(117, 117, 117, 0.77) 0px 2px 10px 0px;
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    transition: all 0.5s ease 0s;
    height: 430px;
    animation: 0.5s ease 0s 1 normal forwards running none;
    display: flex;
    -moz-box-align: center;
    align-items: center;
   
    .imagePerson {
       
        width: 100%;
        display: block;
        z-index: 1;
        
    }

    .cardInformation {
        width: 100%;
        position: absolute;
        bottom: 0;
        color: white;
        z-index: 2;
        background-color: rgb(139, 137, 137, 0.8)
        /* background-color: grey; */

        

        
    }
    
`

export const Titulo = styled.h2`
    margin-left: 10px;
    font-family: Verdana, Arial, Helvetica, sans-serif;
`
export const Bio = styled.p`
    margin-left: 10px;
    font-family: Verdana, Arial, Helvetica, sans-serif;

`


export const Carregando = styled.div`
    .content-coracao {
        position: relative;
        display: flex;
        justify-content: center;
        width: 100px;
        margin: 50px auto;
        -webkit-animation: pulsa 0.8s linear 0s infinite;
    }
    @keyframes pulsa {
    0% {
        transform: scale(0.9) rotate(0deg);
    }
    50% {
        transform: scale(1) rotate(0deg);
    }
    70% {
        transform: scale(1.1) rotate(0deg);
    }
    80% {
        transform: scale(1.2) rotate(0deg);
    }
    100% {
        transform: scale(1) rotate(0deg);
    }
    }
    .square {
        transform: rotate(45deg);
        width: 50px;
        height: 50px;
        background: #712591;
        position: absolute;
        top: 30px;
    }
    .circle:after,
    .circle:before {
        content: "";
        position: absolute;
        width: 54px;
        height: 55px;
        border-radius: 50%;
        background: #712591;
    }
    .circle:after {
        left: 5px;
        top: 6px;
    }
    .circle:before {
        right: 5px;
        top: 6px;
    }

`
export const TituloCarregando = styled.h3`
    font-family: Verdana, Arial, Helvetica, sans-serif;
    text-align: center;
    margin-top: 25px;
    font-size: 35px;
    color: #45A396;

`

export const TituloFim = styled.h3`
    font-family: Verdana, Arial, Helvetica, sans-serif;
    text-align: center;
    margin-top: 25px;
    font-size: 35px;
    color: #712591;
    
`

export const ImgCoracao = styled.img`
    width: 100px;
   

`

export const ContainerFim = styled.div`
    display: flex; 
    align-items: center;
    flex-direction: column;

`