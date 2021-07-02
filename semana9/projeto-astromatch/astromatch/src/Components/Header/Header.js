import React, {useEffect, useState} from  'react';
import Logo from '../../img/logo.png'
import {ImageLogo, ContainerHeader} from './styled'


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
                <button onClick={()=>setPage('Matches')}>Matches </button>
            }
        </ContainerHeader>
    )
}

export default Header