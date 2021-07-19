import React, {useEffect, useState} from  'react';
import Header from '../../Components/Header/Header'
import ListMatches from '../Matches/Components/ListMatches/ListMatches'
import axios from  'axios';
import {CardBody, CardMain} from './styled'



const Matches = ({setPage, atualizaLista}) => {
    const [listMatches, setListMatches] = useState([])
    const [load, setLoad] = useState(true)

    const getMatches = () => {
        const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vitoriaMolina/matches`
        axios.get(url)
        .then((res) => {
            setListMatches(res.data.matches)
            setLoad(false)
        })
        .catch((err) =>{
            alert(err.message)
        })
       
    }

    useEffect(() => {
        getMatches()
    }, [atualizaLista])

    return(
        <CardBody>
            <CardMain>
                <Header page='Matches' setPage={setPage} />
                <ListMatches listMatches={listMatches} load={load} setLoad={setLoad} />
            </CardMain>
        </CardBody>
    )
}

export default Matches