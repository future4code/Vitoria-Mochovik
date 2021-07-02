import React, {useEffect, useState} from  'react';
import { CardPerfil, Card, Titulo, Bio} from './styled'
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
                            <Titulo> {person.name}, {person.age} </Titulo>
                            <Bio> {person.bio} </Bio>
                        </div>
                </CardPerfil>
                : <p> nothing</p> }
            </div>
        </div>
    )
}

export default CardPessoa