import React, {useEffect, useState} from  'react';
import axios from  'axios';

const getProfileChoose = async () => {
    const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:vitoria/person`
    
    const res = await axios.get(url)
    console.log('res', res.data.profile)
    return res.data.profile
   
}
export default getProfileChoose

