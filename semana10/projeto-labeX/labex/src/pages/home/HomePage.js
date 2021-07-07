import React from 'react';
import { useHistory } from 'react-router-dom'

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
            <p> HomePage</p>
            <button onClick={goToListTrips}> Lista de Viagens </button>
            <button onClick={goToAreaAdm}> Área Adm </button>
        </div>
    )
}

export default HomePage