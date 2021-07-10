import React from 'react';
import { ContainerGeral, ImgLogo, ContainerButtons, Button, ButtonDestaque }  from './styled'
// import Logo  from '../img/logo-removebg-preview.png'
import Logo  from '../img/logo5.png'
import TextLogomarca from '../img/logo6.png'
// import { Button } from '@material-ui/core'


const Header = () => {
    let urlAtual = (window.location.href).split("/")
    // const nova = urlAtual.split("/")
    
    let urlAgrupada = ''
    for(let i = 3; i<urlAtual.length; i++) {
        urlAgrupada = urlAgrupada.concat(urlAtual[i])
    }
    
    console.log("url atual", urlAtual)
    console.log("url agrupada", urlAgrupada)

    
    return(
        <ContainerGeral>
            <ImgLogo src={Logo} />
            
            { urlAgrupada.length === 0 && 
                <ContainerButtons>    
                    <Button > ÁREA ADM</Button>
                    <Button > SOBRE NÓS</Button>
                    <ButtonDestaque > LISTA DE VIAGENS</ButtonDestaque> 
                </ContainerButtons> }
            { urlAgrupada === "admintripslist" && 
                <ContainerButtons>    
                    <Button > VOLTAR </Button>
                    <Button > LOGOUT </Button>
                    <ButtonDestaque > CRIAR VIAGENS</ButtonDestaque> 
                </ContainerButtons> }
            { urlAtual.length >= 6 && urlAtual[5] !== "list" &&
                <ContainerButtons>    
                    <Button > VOLTAR </Button>
                    <Button > LOGOUT </Button>
                    <Button > LISTA DE VIAGENS </Button>
                    <ButtonDestaque > CRIAR VIAGENS</ButtonDestaque> 
                </ContainerButtons> }
        </ContainerGeral>
    )
}

export default Header;