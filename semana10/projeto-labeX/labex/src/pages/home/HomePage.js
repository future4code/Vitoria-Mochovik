import React from 'react';
import { useHistory } from 'react-router-dom'
import Header  from '../../header/Header'

import Astronauta from '../../img/astronauta-foguete.png'
import AstronautaAdm from '../../img/astronauta-adm.png'
import TextoLogo from '../../img/logomarca.png'

import { ImgAstronauta, ContainerChamada, ContainerAstronauta,
    ContainerTitulos, ContainerTextoLogo, ImgTextoLogo, 
    ContainerTitulosAdm, Button, ImgAstronautaAdm } from './styled' 

const HomePage = () => {
    const history = useHistory()

    const goToListTrips = () => {
        history.push("/trips/list")
    }

    const goToAreaAdm = () => {
        history.push("/login")
    }

    return(
        <div>
            <Header />
            <ContainerTextoLogo >
                <ImgTextoLogo src={TextoLogo} />
            </ContainerTextoLogo>
            <ContainerChamada>
                <ContainerTitulos>
                    <h3> Precisando sair da rotina?</h3>
                    <h4> Aqui você encontra a viagem dos seus sonhos!</h4> 
                    <Button onClick={goToListTrips}> Lista de Viagens </Button>
                </ContainerTitulos>
                <ContainerAstronauta>
                    <ImgAstronauta src={Astronauta} />
                </ContainerAstronauta>
            </ContainerChamada>
            <ContainerChamada> 
                <ContainerAstronauta>
                    <ImgAstronautaAdm src={AstronautaAdm} />
                </ContainerAstronauta>
                <ContainerTitulosAdm>
                    <h3> É um administrador? </h3>
                    <h4> Acesse agora as suas viagens</h4> 
                    <Button onClick={goToAreaAdm}> Área Adm </Button>
                </ContainerTitulosAdm>
            </ContainerChamada>   
        </div>
    )
}

export default HomePage