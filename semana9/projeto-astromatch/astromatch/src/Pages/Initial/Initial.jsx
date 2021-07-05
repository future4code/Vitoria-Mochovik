import React, {useEffect, useState} from  'react';
import axios from  'axios';
import getProfileChoose from '../../Requests/ProfileChoose';
import {CardMain, CardBody} from './styled'
import CardPessoa from './Components/CardPerson/CardPerson';
import Buttons from  './Components/Buttons/Buttons';
import Header from '../../Components/Header/Header';

const Initial = ({setPage}) => {
    const [person, setPerson] = useState()
    const [newPerson, setNewPerson] = useState(false)
    const [load, setLoad] = useState(true)

    const personSet = async() => {
        try{
            const result = await getProfileChoose()
            setPerson(result)
            setLoad(false)
        }
        catch(error){
            alert(error.message)
        }
    }

    useEffect(() => {
        personSet()
    }, [newPerson])

    return (
        <CardBody>
            <CardMain> 
                <Header page='Initial' setPage={setPage}/>
                <CardPessoa person={person} load={load} />
                { person ? 
                    <Buttons person={person}  setNewPerson={setNewPerson} newPerson={newPerson} setLoad={setLoad} load={load} />
                : <div> </div>}
                
            </CardMain>
        </CardBody>
    )

}

export default Initial;
