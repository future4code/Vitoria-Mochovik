import React from 'react'

import {ContainerGeral, ImgLogo, ImgTitulo, ContainerMarca, Button}  from './styled'
import Logo from '../../assets/logo2.png'
import Titulo from '../../assets/logomarca2.png'

const Header = () => {
    return(
        <ContainerGeral>
            <ContainerMarca>
                <ImgLogo src={Logo} />
                <ImgTitulo src={Titulo} />
            </ContainerMarca>
            <div>
                <Button> LOGOUT </Button>
            </div>
            
        </ContainerGeral>
    )
}

export default Header