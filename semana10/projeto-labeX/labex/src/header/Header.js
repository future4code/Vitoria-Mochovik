import React from 'react';
import {useHistory} from 'react-router-dom'
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
    
    // console.log("url atual", urlAtual)
    // console.log("url agrupada", urlAgrupada)

    const history = useHistory()

    const goToListTrips = () => {
        history.push("/trips/list")
    }

    const goToAreaAdm = () => {
        history.push("/login")
    }

    const goToCreateTrip = () => {
        history.push("/admin/trips/create")
    }

    const goBack = () => {
        if(urlAtual.length >= 6 && urlAtual[5] === "list") {
            goHome()
        } else {
            history.goBack()
        }
        
    }

    const goHome = () => {
        history.push("/")
    }

    const logout = () => {
        localStorage.clear();
        history.push("/login")
    }

    const goToApplicationForm = () => {
        history.push("/trips/application")
    }
    
    return(
        <ContainerGeral>
            <ImgLogo src={Logo} />
            
            { urlAgrupada.length === 0 && 
                <ContainerButtons>    
                    <Button onClick={goToAreaAdm} > ÁREA ADM</Button>
                    <Button > SOBRE NÓS</Button>
                    <ButtonDestaque onClick={goToListTrips} > LISTA DE VIAGENS</ButtonDestaque> 
                </ContainerButtons> }
            {/* { urlAgrupada === "admintripslist" && 
                <ContainerButtons>    
                    <Button > VOLTAR </Button>
                    <Button > LOGOUT </Button>
                    <Button > HOME </Button>
                    <ButtonDestaque > CRIAR VIAGENS</ButtonDestaque> 
                </ContainerButtons> } */}
            { urlAtual.length >= 6 && urlAtual[6] !== "create" &&
                <ContainerButtons>    
                    <Button onClick={goBack}> VOLTAR </Button>
                    <Button onClick={logout}> LOGOUT </Button>
                    <Button onClick={goHome}> HOME </Button>
                    <ButtonDestaque onClick={goToCreateTrip}> CRIAR VIAGENS</ButtonDestaque> 
                </ContainerButtons> }
            { urlAgrupada === "tripslist" && 
                <ContainerButtons>    
                    <Button onClick={goBack}> VOLTAR </Button>
                    <Button onClick={goHome}> HOME </Button>
                    <ButtonDestaque  onClick={goToApplicationForm} > INSCREVA-SE </ButtonDestaque> 
                </ContainerButtons> }
        </ContainerGeral>
    )
}

export default Header;