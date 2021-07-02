import React, {useEffect, useState} from  'react';
import axios from  'axios';



const ListMatches = ({listMatches}) =>{
    console.log("lista matches", listMatches)
    const matches = listMatches.map((person) => {
        return(
            <div key={person.id}>
                <img src={person.photo} />
                <p> {person.name}</p>
            </div>
        )
    })
    return(
        <div> 
            <p> listaa</p>
            <div>
            {listMatches.lenght === 0 ?
                <p> Nenhum matches</p>
            : <p>{matches} </p> }
            </div>
        </div>
    )
}

export default ListMatches