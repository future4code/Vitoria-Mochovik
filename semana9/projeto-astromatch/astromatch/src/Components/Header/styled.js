import styled from 'styled-components'

export const ImageLogo = styled.img`
    height: 100%;

`

export const ContainerHeader = styled.div`
    height: 50px;
    border-bottom: 1px solid lightgray;
    display: flex;
    /* -moz-box-pack: justify; */
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 0px 10px;


`

export const ImageLista = styled.img`
    width: 35px;

    &:hover{
        cursor: pointer;
    }
`

export const ImgVoltar = styled.img`
    width: 35px;
    &:hover{
        cursor: pointer;
    }
`