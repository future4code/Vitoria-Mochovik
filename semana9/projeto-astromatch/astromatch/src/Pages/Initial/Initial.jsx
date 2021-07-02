import React, {useEffect, useState} from  'react';
import axios from  'axios';
import getProfileChoose from '../../Requests/ProfileChoose';
import {ImagePerson} from './styled'
import CardPessoa from './Components/CardPerson/CardPerson';
import Buttons from  './Components/Buttons/Buttons';
import Header from '../../Components/Header/Header';

const Initial = ({setPage}) => {
    const [person, setPerson] = useState()
    const [newPerson, setNewPerson] = useState(false)

    const personSet = async() => {
        try{
            const result = await getProfileChoose()
            setPerson(result)
        }
        catch(error){
            alert(error.message)
        }
    }

    useEffect(() => {
        personSet()
    }, [newPerson])

    return (
        <div> 
            <p> initial</p>
            <Header page='Initial' setPage={setPage}/>
            <CardPessoa person={person}/>
            <Buttons person={person}  setNewPerson={setNewPerson} newPerson={newPerson}/>
        </div>
    )

}

export default Initial;
