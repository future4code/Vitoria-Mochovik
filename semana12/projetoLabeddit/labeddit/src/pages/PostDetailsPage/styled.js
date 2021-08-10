import styled from "styled-components"

export const CardComentario = styled.div`
    background-color: #F0F2F5;
    display: flex;
    align-items: center;
    border-radius: 15px;
    border: 1px solid #F0F2F5;

    margin: 30px;
    height: 100%;
    width: 510px;
`

export const CardVote = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 8%;
    height: 100%;
    
    background-color: #F0F2F5;
    margin-bottom: 5px;
    margin-top: 5px;
   
`

export const  ImgFlecha = styled.img`
    width: 20px;
    
`

export const CardInformation = styled.div`
    /* background-color: pink; */
    display: flex;
    flex-direction: column;
    /* justify-content: space-around; */
    width: 95%;
    margin: 0px;

    h3 {
        margin: 3px;
    }

    p {
        margin: 3px;
    }
`

export const CardAction = styled.div`
    /* background-color: green; */
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    /* height: 60px; */
    font-size: 15px;
    color: #8F9294;
    
    p{
        padding-right: 15px;
        padding-left: 3px;
    }
    
    
    
`