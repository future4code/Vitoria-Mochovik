import styled from 'styled-components'
import Back from '../../assets/back2.jpeg'

export const ContainerGeral = styled.div`
    background-image: url(${Back});
    margin: 0px;
    padding: 0px;
    height: 100vh;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`
export const Button = styled.button`
  height: 35px;
  width: 80px;
  cursor: pointer;
  font-family: Arial, Helvetica, sans-serif;
  padding: 3px;
  border: none;
  color: white;
  background-color: #343B45;
  border-radius: 5px;
  /* box-shadow: 0 5px 0 #210053; */
  transition: all 0.5s;
  font-size: 15px;
  &:hover{
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }  
  &:active {
    position:relative;
    top: 5px;
  }
`

export const IconePerfil = styled.img`
width: 100px;
border-radius: 150px;
margin-bottom: 350px;
position: absolute;
transition: all 1s;
&:hover{
  -webkit-transform: rotateZ(360deg);
  transform: rotateZ(360deg);
  cursor: pointer;
}
`

export const ContainerButton = styled.div`
   
   display: flex;
   justify-content:center;
   align-items: center;
   margin-top: 20px;
`
