import styled from 'styled-components'


export const Delete = styled.button`
    border-radius: 50%;
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


`

export const Container = styled.div`
    display: flex;
    justify-content: space-around;

`