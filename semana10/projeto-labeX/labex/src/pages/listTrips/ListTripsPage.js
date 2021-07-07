import React from 'react';
import {useHistory} from 'react-router-dom'

const ListTripsPage = () => {
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }
    return(
        <div>
            <p> ListTripsPage</p>
            <button onClick={goBack}> Go back</button>
        </div>
    )
}
export default ListTripsPage;