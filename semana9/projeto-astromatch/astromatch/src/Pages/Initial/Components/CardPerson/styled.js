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



   


