import React, {useEffect, useState} from  'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom'
import Header  from '../../header/Header'
import { ContainerCard, ContainerMain, ContainerAprovados, 
    ContainerPendentes, ContainerGeral, CardCandidatos, ContainerPend,
    ImgPlanet, ContainerImg, ContainerViagem } from './styled'

import Saturno from '../../img/saturno.jpg'
import Netuno from '../../img/netuno.jpg'
import Marte from '../../img/marte.jpg'
import Mercurio from '../../img/mercurio.jpg'
import Urano from '../../img/urano.jpg'
import Venus from '../../img/venus.jpg'
import Jupiter from '../../img/jupiter.jpg'
import Terra from '../../img/terra.jpg'
import Plutao from '../../img/plutao.jpg'



const TripDetailsPage = () => {
    const history = useHistory()
    const pathParams = useParams()
    const token = window.localStorage.getItem("token")

    const [trip, setTrip] = useState({})
    const [successfulCandidates, setSuccessfulCandidates] = useState([])
    const [pendingCandidates, setPendingCandidates] = useState([])

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

    const getTripDetails = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/vitoria-mochovik-molina/trip/${pathParams.id}`
            const headers = {
                auth: token
            }
            
            axios.get(url, {headers})
            .then((res) => {
                console.log("aqui deu tripdetail", res.data.trip)
                setTrip(res.data.trip)
                setPendingCandidates(res.data.trip.candidates)
                setSuccessfulCandidates(res.data.trip.approved)
                

            })
            .catch((err) => {
                console.log("deu ruim no details", err.message)
            })    
    }

    useEffect(() => {
        getTripDetails()
    }, [])


    const decideCandidate = (approve, candidateId) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/vitoria-mochovik-molina/trips/${pathParams.id}/candidates/${candidateId}/decide`
        const headers = {
            auth: token
        }

        const body = {
            approve: approve
        }

        axios.put(url, body, {headers})
        .then((res) => {
            console.log("deu aqui na decide", res.data)
            getTripDetails()
        })
        .catch((err) => {
            console.log("deu naoooo", err.message)
        })
    }
    
    const pending = pendingCandidates.map((information) => {
        return(
            <CardCandidatos>
                <p> Nome: {information.name} </p>
                <p> Profissão: {information.profession}</p>
                <p> Idade: {information.age}</p>
                <p> País: {information.country}</p>
                <p> Texto de Candidatura: {information.applicationText}</p>
                <button onClick={() => decideCandidate(true, information.id)}> Aprovar </button>
                <button onClick={() => decideCandidate(false, information.id)}> Reprovar </button>
            </CardCandidatos>
        )
    })

    const successful = successfulCandidates.map((information) => {
        return(
            <div>
                <h4> {information.name} </h4>
                {/* <p> {information.profession}</p>
                <p> {information.age}</p>
                <p> {information.country}</p>
                <p> {information.applicationText}</p> */}
            </div>
        )
    })

    
    return(
        <div>
            <Header />
            <ContainerGeral>
                <ContainerCard>
                    <ContainerImg>
                        <ImgPlanet src={caminho(trip.planet)} />
                    </ContainerImg>
                    <ContainerViagem>
                        <h2> {trip.name} </h2>
                        <p> Descrição: {trip.description}</p>
                        <p> Planeta: {trip.planet}</p>
                        <p> Duração: {trip.durationInDays} dias</p>
                        <p> Data: {trip.date}</p>      
                    </ContainerViagem>
                     
                </ContainerCard>
                <ContainerMain>
                    <ContainerAprovados>
                        <h4> Candidatos aprovados</h4>
                        <div> 
                            { successfulCandidates.length > 0 ? 
                            <div> {successful} </div>
                            : <p>Nenhum candidato aprovado</p> }
                        </div>
                    </ContainerAprovados>
                    <ContainerPendentes>
                        <h4> Candidatos pendentes</h4>
                        <div> 
                            { pendingCandidates.length > 0 ? 
                                <ContainerPend> {pending} </ContainerPend>
                            : <p>Nenhum candidato pendente</p> }
                        </div>
                    </ContainerPendentes>
                </ContainerMain>
            </ContainerGeral>
        </div>
    )
}

export default TripDetailsPage