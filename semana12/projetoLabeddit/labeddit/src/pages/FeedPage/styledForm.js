import styled from 'styled-components'

export const ContainerInputs = styled.div`
    /* background-color: green; */
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    
`

export const InputDescricao = styled.input`
    width: 450px;
    height: 100px;
    /* margin-right: 35px; */


`
export const InpuTitulo = styled.input`
    margin-bottom: 10px;
    width: 450px;
    /* margin-right: 35px; */


`

export const ContainerButton = styled.div`
    display: flex;
    justify-content: flex-end;
    
    margin-top: 15px;
    margin-right: 62px;
    /* background-color: blue; */
`

export const Button = styled.button`
    height: 20px;
    width: 80px;
    
    
    border: 2px solid #8682CE;
    color: white;
    background-color: #8682CE;
    font-size: 10px;
    font-weight: bold;
    font-family: Noto Sans,Arial,sans-serif;
    text-align: center;

    &:hover{
        cursor: pointer;
        background-color: white;
        color: #8682CE;
    }
`

export const Form = styled.form`
    /* background-color: pink; */
    width: 100%;
    display: flex;
    flex-direction: column;
    
`