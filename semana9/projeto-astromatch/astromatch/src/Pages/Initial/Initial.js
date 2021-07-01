import React, {useEffect, useState} from  'react';
import axios from  'axios';
import getProfileChoose from '../../Requests/Requests';
import {ImagePerson} from './styled'
import CardPessoa from './Components/CardPerson/CardPerson';
import Buttons from  './Components/Buttons/Buttons';

const Initial = (props) => {
   
    return (
        <div> 
            <p> initial</p>
            <CardPessoa />
            <Buttons pageSet={props.pageSet}/>
        </div>
    )

}

export default Initial;
