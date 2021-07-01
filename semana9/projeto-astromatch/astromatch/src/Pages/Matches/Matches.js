import React, {useEffect, useState} from  'react';
import Header from '../Matches/Components/Header/Header'
import ListMatches from '../Matches/Components/ListMatches/ListMatches'


const Matches = () => {
    return(
        <div>
            <p> matches</p>
            <Header />
            <ListMatches />
            
        </div>
    )
}

export default Matches