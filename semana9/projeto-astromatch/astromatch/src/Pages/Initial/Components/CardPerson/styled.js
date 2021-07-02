import styled from 'styled-components'

export const ImagePerson = styled.img`
    width: 100%;

`
export const Card = styled.div`
    /* height: 100%;
    width: 100%;
    position: absolute;
    box-shadow: 5px 5px 5px 5px grey;
    box-sizing: border-box;
    filter: blur(30px); */

    filter: blur(30.2px);
height: 100%;
width: 100%;
position: absolute;

    /* background-color: blue; */

`
export const CardPerfil = styled.div`
    /* margin: 15px;
    position: relative;
    height: 430px;
    width: 358px; */
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
    /* filter: blur(5px); */
    /* background-color: pink; */
    /* box-shadow: 5px 5px 5px 5px grey; */
   

    .imagePerson {
        /* width: 100%;
        height: 80%;
        align-self: center; */

        width: 100%;
        display: block;
        z-index: 1;
        /* -webkit-filter: blur(30px); */
        /* z-index: 1; */

        /* border: 1px solid black; */
        /* box-shadow: 5px 5px 5px 5px grey; */
    }

    .cardInformation {
       position: absolute;
       bottom: 0;
       color: white;

        
    }

`




   


