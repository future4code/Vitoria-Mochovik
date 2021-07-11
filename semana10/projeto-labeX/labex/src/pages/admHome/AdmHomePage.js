import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Header  from '../../header/Header'

import Saturno from '../../img/saturno.jpg'
import Netuno from '../../img/netuno.jpg'
import Marte from '../../img/marte.jpg'
import Mercurio from '../../img/mercurio.jpg'
import Urano from '../../img/urano.jpg'
import Venus from '../../img/venus.jpg'
import Jupiter from '../../img/jupiter.jpg'
import Terra from '../../img/terra.jpg'
import Plutao from '../../img/plutao.jpg'

import { CardViagem, ContainerCard, CardInformation, ImgPlanet, 
    ContainerCards, Button, ContainerNumbers, ContainerButton, 
    Pexcluir, ButtonExcluir, Titulo } from  './styled'

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


const AdmHomePage = () => {
    const [tripInformation, setTripInformation] = useState([])
    const [tripsDetails, setTripsDetails] = useState([])
    const history = useHistory()

    const token = window.localStorage.getItem("token")

    const verifyAuthorization = () => {
        if(!token) {
            history.push("/login")
        }

    }

    useEffect(() => {
        verifyAuthorization()
        getTrips()
    }, [])

    useEffect(() => {
        getTripDetails()
    }, [tripInformation])

    const getTrips = async() => {
        try{
            const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/vitoria-mochovik-molina/trips`
            const res = await axios.get(url)
            setTripInformation(res.data.trips)
           
        }
        catch(err) {
            console.log("errou nas viagens". err.message)
        }
    }

    const goToTripDetails = (id) => {
        history.push(`/admin/trips/${id}`)
    }

    const deleteTrip = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/vitoria-mochovik-molina/trips/${id}`
        const headers = {
            auth: token
        }

        if(window.confirm("Tem certeza que deseja excluir?")) {
            axios.delete(url, {headers})
            .then((res) => {
                alert("Viagem excluida com sucesso!")
                verifyAuthorization()
            })  
            .catch((err) => {
                alert("algo deu errado! Tente novamente")
            })
        }
        
    }

    const getTripDetails = async() => {
        const newTripsDetails = []
        for(const trip of tripInformation) {
            try{
                const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/vitoria-mochovik-molina/trip/${trip.id}`
                const headers = {
                    auth: token
                }
                const res = await axios.get(url, {headers})
                // teste = res.data.trip.approved.length
                // return res.data.trip.approved.length
                const obj = {
                    id: res.data.trip.id,
                    candidates: res.data.trip.candidates,
                    approved: res.data.trip.approved
                }
                newTripsDetails.push(obj)    
            }
            catch(err){
                console.log("deu ruim no details", err.message)
            } 
                
        }
        setTripsDetails(newTripsDetails)
    }

    const namesTrips = () => {
        const qua = tripInformation.map((information, index)=>{
            console.log(tripsDetails[index])
            return(
                <ContainerCard>
                    <CardViagem key={information.id}>
                        <h3 > {information.name}</h3>
                        <ImgPlanet src={caminho(information.planet)} />
                        <ButtonExcluir onClick={() => deleteTrip(information.id)}> Excluir </ButtonExcluir>
                    </CardViagem>
                    <CardInformation>
                        <ContainerButton>
                            <Pexcluir onClick={() => deleteTrip(information.id)}> X  </Pexcluir>
                        </ContainerButton>
                        <ContainerNumbers>
                            <p>Número de candidatos aprovados: </p>
                            <p> {tripsDetails[index].approved.length} </p>
                            <p>Número de candidatos pendentes: </p>
                            <p> {tripsDetails[index].candidates.length} </p>
                            <Button onClick={() => goToTripDetails(information.id)}> CANDIDATOS </Button>
                        </ContainerNumbers>
                    </CardInformation>
                </ContainerCard>
            )
        })
    
        return qua
    }

    return(
        <div>
            <Header />
            <Titulo> 
                <h3 > VIAGENS</h3>
            </Titulo>
            {
                tripsDetails.length > 0? 
                    <ContainerCards>
                        {namesTrips() }
                    </ContainerCards>     
                : 
                    <div>Carregando</div>
            }

        </div>
    )
}

export default AdmHomePage
