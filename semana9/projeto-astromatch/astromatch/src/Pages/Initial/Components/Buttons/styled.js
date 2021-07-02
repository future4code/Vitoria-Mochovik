import styled from 'styled-components'


export const Delete = styled.button`
    border-radius: 40%;
    width: 80px;
    height: 80px;
    border: 1px solid #45A396;
    color: #45A396;
    font-size: 50px;
    transform: scale(0.7);
    transition: all 0.2s ease 0s;
    position: relative;
    box-shadow: rgba(205, 205, 205, 0.73) 0px 0px 15px 0px;
    overflow: hidden;

    &:hover{
        background-color: #45A396;
        color: white;
        transform: scale(0.8);
    }

`

export const Gostei = styled.img`
    width: 50px;
    height: 50px;

    border-radius: 40%;
    padding: 15px;
    border: 1px solid #762D93;
    color: #762D93;
    font-size: 80px;
    transform: scale(0.7);
    transition: all 0.2s ease 0s;
    position: relative;
    box-shadow: rgba(205, 205, 205, 0.73) 0px 0px 15px 0px;
    /* overflow: hidden; */

    &:hover{
        background-color: #762D93;
        color: white;
        transform: scale(0.8);
    }

`

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

`