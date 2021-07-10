import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'

const ListTripsPage = () => {
    const [trips, setTrips] = useState([])
    const history = useHistory()

    const goBack = () => {
        history.goBack()
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

    const goToApplicationForm = () => {
        history.push("/trips/application")
    }

    const tripDetails = trips.map((information) => {
        return(
            <div key={information.id}>
                <p> Nome: {information.name}</p>
                <p> Descrição: {information.description}</p>
                <p> Planeta: {information.planet}</p>
                <p> Duração: {information.durationInDays}</p>
                <p> Data: {information.date}</p>
                <p> ____________________________</p>
            </div>
        )
    })
    return(
        <div>
            <p> ListTripsPage</p>
            <button onClick={goToApplicationForm}> Inscreva-se</button>
            <button onClick={goBack}> Go back</button>
            <div> {tripDetails}</div>
            
        </div>
    )
}
export default ListTripsPage;