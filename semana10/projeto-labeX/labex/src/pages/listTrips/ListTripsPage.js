import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import Header  from '../../header/Header'
import { ContainerCard, ContainerImg, ImgPlanet, ContainerViagem,
ContainerCards } from './styled'

import Saturno from '../../img/saturno.jpg'
import Netuno from '../../img/netuno.jpg'
import Marte from '../../img/marte.jpg'
import Mercurio from '../../img/mercurio.jpg'
import Urano from '../../img/urano.jpg'
import Venus from '../../img/venus.jpg'
import Jupiter from '../../img/jupiter.jpg'
import Terra from '../../img/terra.jpg'
import Plutao from '../../img/plutao.jpg'

const ListTripsPage = () => {
    const [trips, setTrips] = useState([])
    const history = useHistory()

    const caminho = (planet) => {
        switch(planet){
            case 'Saturno':
                return Saturno
            case 'Netuno':
                return Netuno
            case 'Marte':
                return Marte
            case 'Mercurio':
                return Mercurio
            case 'Urano':
                return Urano
            case 'Venus':
                return Venus
            case 'Jupiter':
                return Jupiter
            case 'Terra':
                return Terra
            case 'Plutão':
                return Plutao
        }
    }

    
    const getListTrip = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/vitoria-mochovik-molina/trips`
        
        axios.get(url)
        .then((res) => {
            console.log("LISTA TRIPS", res.data)
            setTrips(res.data.trips)
        })
        .catch((err) => {
            console.log("erroooooooouuu", err.message)
        })
    }

    useEffect(() => {
        getListTrip()
    }, [])

   

    const tripDetails = trips.map((information) => {
        return(
            <ContainerCards key={information.id}>
                <ContainerCard >
                    <ContainerImg>
                        <ImgPlanet src={caminho(information.planet)} />
                    </ContainerImg>
                    <ContainerViagem>
                        <p> Nome: {information.name}</p>
                        <p> Descrição: {information.description}</p>
                        <p> Planeta: {information.planet}</p>
                        <p> Duração: {information.durationInDays}</p>
                        <p> Data: {information.date}</p>
                    </ContainerViagem>
                </ContainerCard>
            </ContainerCards>
        )
    })
    return(
        <div>
            <Header />
            <div> {tripDetails}</div>
            
        </div>
    )
}
export default ListTripsPage;