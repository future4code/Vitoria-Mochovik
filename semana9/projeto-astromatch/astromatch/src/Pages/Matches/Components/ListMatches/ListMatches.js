import React, {useEffect, useState} from  'react';
import axios from  'axios';
import {ImagePerson, CardContato, Titulo, CardTitulo} from './styled'



const ListMatches = ({listMatches}) =>{
    console.log("lista matches", listMatches)
    const matches = listMatches.map((person) => {
        return(
            <CardContato key={person.id}>
                <ImagePerson src={person.photo} />
                <p> {person.name}</p>
            </CardContato>
        )
    })
    return(
        <div> 
            <CardTitulo>
                <Titulo> Seus Contatos ♥️ </Titulo>
            </CardTitulo>
            <div>
                {listMatches.lenght === 0 ?
                    <p> Nenhum matches</p>
                : <p>{matches} </p> }
            </div>
        </div>
    )
}

export default ListMatches