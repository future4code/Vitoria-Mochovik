import React, {useEffect, useState} from  'react';
import Logo from '../../img/logo.png'
import {ImageLogo, ImageLista, ContainerHeader} from './styled'
import LogoLista from '../../img/listaIcone.jpg'


const Header = ({page, setPage}) =>{
    return(
        <ContainerHeader> 
            {
                page==='Matches' &&
                <button onClick={()=>setPage("Initial")}>Initial</button>
            }
            {/* <p> header</p> */}
            <ImageLogo src={Logo} />
            {
                page==='Initial' &&
                <ImageLista src={LogoLista} onClick={()=>setPage('Matches')} />
            }
        </ContainerHeader>
    )
}

export default Header