import React from 'react';
import {useHistory} from 'react-router-dom'

const AdmHomePage = () => {
    const history = useHistory()

    const goToCreateTrip = () => {
        history.push("/admin/trips/create")
    }

    return(
        <div>
            <p> AdmHomePage</p>
            <button onClick={goToCreateTrip}> Criar Viagens </button>
        </div>
    )
}

export default AdmHomePage
