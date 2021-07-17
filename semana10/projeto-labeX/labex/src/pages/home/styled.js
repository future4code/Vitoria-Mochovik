import styled from 'styled-components'
import Back from '../../img/terra-back1.jpg'


export const ImgAstronauta = styled.img`
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    width: 150px;
    margin-right: 35px;
`
export const ImgAstronautaAdm = styled.img`
    width: 150px;
    margin-left: 35px;
`

export const ContainerChamada = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    margin: 25px;
    padding: 15px;
    border: 1px solid black;
    border-radius: 15px;
    /* background-color: #FFC09D; */
    
`

export const ContainerAstronauta = styled.div`
    
    
    
`

export const ContainerTitulos = styled.div`
    margin-left: 35px;

    


`

export const ContainerTextoLogo = styled.div`
    display:flex;
    align-items: center;
    
    justify-content:center;
    background-image: url(${Back});
    background-repeat: no-repeat;
    height: 800px;
    width: 100%;
    
`

export const ImgTextoLogo = styled.img`
    
    

`
export const ContainerTitulosAdm = styled.div`
     display: flex;
     flex-direction: column;
     align-items: flex-end;
     margin-right: 35px;
     

`
export const Button = styled.button`
    
    height: 45px;
    padding: 0px 15px;
    border: 2px solid #343B45;
    
    background-color: #343B45;
    color: white;
    font-weight: bold;
    :hover {
        opacity: 35%;
        cursor: pointer;
    }

`