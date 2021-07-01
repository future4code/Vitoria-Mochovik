import React, {useEffect, useState} from  'react';
import  ImageDelete  from '../../../../img/icone-excluir.png';
import ImageCoracao from '../../../../img/icone-coracao.png'
import { Delete, Gostei} from './styled.js'
import ChangePage from '../../../ChangePage';
import pageSet from '../../../../App.js'

const Buttons = (props) => {
    const pageSet1 = () =>{
        console.log("aqui eu consigo")
    }


    return(
        <div>
            <Delete src={ImageDelete} />
            <Gostei src={ImageCoracao} onClick={props.pageSet} />
        </div>
    )
}

export default Buttons