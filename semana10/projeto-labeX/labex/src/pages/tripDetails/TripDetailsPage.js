import React, {useEffect, useState} from  'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom'


const TripDetailsPage = () => {
    const history = useHistory()
    const pathParams = useParams()
    const token = window.localStorage.getItem("token")

    const [trip, setTrip] = useState({})
    const [successfulCandidates, setSuccessfulCandidates] = useState([])
    const [pendingCandidates, setPendingCandidates] = useState([])

    const goBack = () => {
        history.goBack()
    }
    console.log("token", token)
    console.log("id", pathParams.id)

    useEffect(() => {
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
        })
        .catch((err) => {
            console.log("deu naoooo", err.message)
        })
    }
    
    const pending = pendingCandidates.map((information) => {
        return(
            <div>
                <h4> {information.name} </h4>
                <p> {information.profession}</p>
                <p> {information.age}</p>
                <p> {information.country}</p>
                <p> {information.applicationText}</p>
                <button onClick={() => decideCandidate(true, information.id)}> Aprovar </button>
                <button onClick={() => decideCandidate(false, information.id)}> Reprovar </button>
            </div>
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

    // const successful = successfulCandidates.map((information) => {
    //     return(
    //         <div>
    //             <p> {information}</p>
    //         </div>
    //     )
    // })
    return(
        <div>
            <p> TripDetailsPage</p>

            <h4> {trip.name} </h4>
                <p> {trip.description}</p>
                <p> {trip.planet}</p>
                <p> {trip.durationInDays}</p>
                <p> {trip.date}</p>
                <h4> Candidatos pendentes</h4>
                <div> 
                    { pendingCandidates.length > 0 ? 
                        <div> {pending} </div>
                    : <p>Nenhum candidato pendente</p> }
                </div>
                <h4> Candidatos aprovados</h4>
                <div> 
                    { successfulCandidates.length > 0 ? 
                        <div> {successful} </div>
                    : <p>Nenhum candidato aprovado</p> }
                </div>

            <button onClick={goBack}> Voltar</button>
        </div>
    )
}

export default TripDetailsPage