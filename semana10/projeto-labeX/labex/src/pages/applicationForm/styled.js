import styled from 'styled-components'
import Back from '../../img/terra-back1.jpg'


export const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;

    /* background-color: blue; */
`
export const Input = styled.input`
    width: 518px;
    height: 40px;
    border-radius: 10px;
    padding: 4px 8px;
    margin: 0px 0px 15px;
    
`
export const Button = styled.button`
    height: 35px;
  
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
    width: 100px;
    margin-bottom: 10px;

`
export const Select = styled.select`
    
    margin: 0px 0px 15px;
    width: 100%;
    height: 40px;
    border-radius: 10px;
    padding: 4px 8px;
`

export const CardForm = styled.div`
    display: flex;
    flex-direction: column;
    /* background-color: red; */
    padding: 15px;


`

export const ContainerTitulo = styled.div`
    display: flex;
    justify-content: center;
    font-size: 30px;
    color: white;
`

export const ContainerGeral = styled.div`
    background-image: url(${Back});
    margin: 0px;
    padding: 0px;
    height: 100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`

export const ButtonDestaque = styled.button`
  height: 35px;
  width: 130px;
  cursor: pointer;
  font-family: Arial, Helvetica, sans-serif;
  padding: 5px;
  border: none;
  color: white;
  background-color: #DF6347;
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

export const ContainerButton = styled.div`
   
   display: flex;
   justify-content:center;
   align-items: center;
   margin-top: 10px;
   
`