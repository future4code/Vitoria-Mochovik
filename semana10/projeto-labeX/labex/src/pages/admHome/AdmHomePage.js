import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom'

const AdmHomePage = () => {
    const [tripInformation, setTripInformation] = useState([])
    const history = useHistory()

    const goToCreateTrip = () => {
        history.push("/admin/trips/create")
    }

    const goBack = () => {
        history.push("/")
    }

    useEffect(() => {

        const token = window.localStorage.getItem("token")
        if(token) {
            const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/vitoria-mochovik-molina/trips`
            axios.get(url)
            .then((res) => {
                console.log("aquiiii", res.data)
                setTripInformation(res.data.trips)
            })
            .catch((err) => {
                console.log("errou nas viagens". err.message)
            }) 
        } else {
            history.push("/login")
        }
        
    
    }, [])

    const namesTrips = tripInformation.map((information) => {
        return(
            <div key={information.id}>
                <h3 > {information.name}</h3>

            </div>
        )
    })
    return(
        <div>
            <p> AdmHomePage</p>
            <button onClick={goToCreateTrip}> Criar Viagens </button>
            <button onClick={goBack}> Voltar</button>
            {namesTrips}
        </div>
    )
}

export default AdmHomePage
