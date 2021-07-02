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

    // console.log("lista", listMatches)
    // console.log("lista matches", listMatches)
    // const matches = listMatches.map((person) => {
    //     return(
    //         <div key={person.id}>
    //             <img src={person.photo} />
    //             <p> {person.name}</p>
    //         </div>
    //     )
    // })
    return(
        <div>
            
            <p> matches</p>
            <Header page='Matches' setPage={setPage} />
            <ListMatches listMatches={listMatches}/>
            
            
        </div>
    )
}

export default Matches