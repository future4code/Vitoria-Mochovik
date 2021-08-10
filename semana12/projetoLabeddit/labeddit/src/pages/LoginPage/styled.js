import styled from 'styled-components'

export const CardLogin = styled.div`
    background-color: rgb(255, 255, 255, 0.7);
    align-items: center;
    justify-content: center;
    padding: 35px;
    border-radius: 15px;
    margin: 0px 500px 0px 500px; 
    height: 220px;
    width: 300px;
`
export const Form = styled.form`
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
`
export const ButtonDestaque = styled.button`
  height: 35px;
  width: 130px;
  cursor: pointer;
  font-family: Arial, Helvetica, sans-serif;
  padding: 5px;
  border: none;
  color: white;
  background-color: #8682CE;
  font-weight: bold;
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
   margin-top: 20px;
`
export const Input = styled.input `
    width: 300px;
    margin-top: 25px;
    height: 25px;
`


