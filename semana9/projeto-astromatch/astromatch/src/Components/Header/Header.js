import React from  'react';
import Logo from '../../img/logo.png'
import {ImageLogo, ImageLista, ContainerHeader, ImgVoltar} from './styled'
import LogoLista from '../../img/listaIcone.jpg'
import Voltar from '../../img/back.png'


const Header = ({page, setPage}) =>{
    return(
        <ContainerHeader> 
            {
                page==='Matches' &&
                <ImgVoltar src={Voltar} onClick={()=>setPage("Initial")}/>
            }
            
            <ImageLogo src={Logo} />
            {
                page==='Initial' &&
                <ImageLista src={LogoLista} onClick={()=>setPage('Matches')} />
            }
        </ContainerHeader>
    )
}

export default Header