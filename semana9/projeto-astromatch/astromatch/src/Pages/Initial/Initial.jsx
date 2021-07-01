import React, {useEffect, useState} from  'react';
import axios from  'axios';
import getProfileChoose from '../../Requests/Requests';
import {ImagePerson} from './styled'
import CardPessoa from './Components/CardPerson/CardPerson';
import Buttons from  './Components/Buttons/Buttons';
import Header from '../../Components/Header/Header';

const Initial = ({setPage}) => {
   
    return (
        <div> 
            
            <p> initial</p>
            <Header page='Initial' setPage={setPage}/>
            <CardPessoa />
            <Buttons />
        </div>
    )

}

export default Initial;
