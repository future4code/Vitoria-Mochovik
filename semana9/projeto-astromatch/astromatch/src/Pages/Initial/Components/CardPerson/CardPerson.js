import React, {useEffect, useState} from  'react';
import {ImagePerson} from './styled'
import getProfileChoose from '../../../../Requests/Requests';

const CardPessoa = () => {
    const [person, setPerson] = useState()

    const personSet = async() => {
        try{
            const result = await getProfileChoose()
            setPerson(result)
            console.log("resultadooooooo", result)
        }
        catch(error){
            alert(error.message)
        }
    }

    useEffect(() => {
        personSet()
    }, [])

    
    console.log("person", person)
    return (
        <div> 
            <div>
            {person ? 
            <div>
                <ImagePerson src={person.photo} />
                <p> {person.name}</p>
                <p> {person.age}</p>
                <p> {person.bio} </p>
                </div>
            : <p> nothing</p> }
            </div>
        </div>
    )
}

export default CardPessoa