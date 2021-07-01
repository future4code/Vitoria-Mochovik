import React, {useEffect, useState} from  'react';
import Header from '../../Components/Header/Header'
import ListMatches from '../Matches/Components/ListMatches/ListMatches'


const Matches = ({setPage}) => {
    return(
        <div>
            <p> matches</p>
            <Header page='Matches' setPage={setPage} />
            <ListMatches />
            
        </div>
    )
}

export default Matches