import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Header  from '../../header/Header'


const AdmHomePage = () => {
    const [tripInformation, setTripInformation] = useState([])
    const history = useHistory()

    const goToCreateTrip = () => {
        history.push("/admin/trips/create")
    }

    const goBack = () => {
        history.push("/")
    }
    
    const token = window.localStorage.getItem("token")

    const verifyAuthorization = () => {
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
    }
    useEffect(() => {
        verifyAuthorization()
    }, [])

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

    const namesTrips = tripInformation.map((information) => {
        return(
            <div key={information.id}>
                <h3 onClick={() => goToTripDetails(information.id)}> {information.name}</h3>
                <button onClick={() => deleteTrip(information.id)}> Excluir </button>

            </div>
        )
    })

    const logout = () => {
        localStorage.clear();
        history.push("/login")
        console.log("token", window.localStorage.getItem("token"))
    }

    return(
        <div>
            <Header />
            <p> AdmHomePage</p>
            <button onClick={goToCreateTrip}> Criar Viagens </button>
            <button onClick={goBack}> Voltar</button>
            <button onClick={logout}> Logout </button>
            {namesTrips}
        </div>
    )
}

export default AdmHomePage
