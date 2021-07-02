import React, {useEffect, useState} from  'react';
import Header from '../../Components/Header/Header'
import ListMatches from '../Matches/Components/ListMatches/ListMatches'
import axios from  'axios';



const Matches = ({setPage}) => {
    const [listMatches, setListMatches] = useState([])

    const getMatches = () => {
        const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vitoriaMolina/matches`
        axios.get(url)
        .then((res) => {
            console.log("ressssssss", res.data.matches)
            setListMatches(res.data.matches)
        })
        .catch((err) =>{
            alert(err.message)
        })
       
    }

    useEffect(() => {
        getMatches()
    }, [])

    return(
        <div>
            
            <p> matches</p>
            <Header page='Matches' setPage={setPage} />
            <ListMatches listMatches={listMatches}/>
            
            
        </div>
    )
}

export default Matches