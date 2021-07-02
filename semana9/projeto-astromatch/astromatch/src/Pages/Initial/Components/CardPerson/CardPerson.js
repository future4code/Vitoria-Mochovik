import React, {useEffect, useState} from  'react';
import {ImagePerson} from './styled'
import getProfileChoose from '../../../../Requests/ProfileChoose';

const CardPessoa = ({person}) => {
    

    
    
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