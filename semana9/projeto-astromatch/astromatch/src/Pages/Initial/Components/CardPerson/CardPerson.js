import React, {useEffect, useState} from  'react';
import { CardPerfil, Card} from './styled'
import getProfileChoose from '../../../../Requests/ProfileChoose';

const CardPessoa = ({person}) => {
    
    return (
        <div> 
            <div>
                {person ? 
                <CardPerfil >
                    <Card style={{ backgroundImage: "url(" + person.photo + ")" }} />
                    <img className="imagePerson" src={person.photo} />
                        <div className="cardInformation">
                            <p> {person.name}, {person.age} </p>
                            <p> {person.bio} </p>
                        </div>
                </CardPerfil>
                : <p> nothing</p> }
            </div>
        </div>
    )
}

export default CardPessoa