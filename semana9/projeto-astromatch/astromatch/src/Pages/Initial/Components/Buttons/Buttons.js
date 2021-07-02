import React, {useEffect, useState} from  'react';
import  ImageDelete  from '../../../../img/icone-excluir.png';
import ImageCoracao from '../../../../img/icone-coracao.png'
import { Delete, Gostei} from './styled.js'
import postChoosePerson from '../../../../Requests/ChoosePerson'


const Buttons = ({person}) => {

    return(
        <div>
            <Delete src={ImageDelete} onClick={() => postChoosePerson(person.id, false)} />
            <Gostei src={ImageCoracao} onClick={() => postChoosePerson(person.id, true)}/>
        </div>
    )

}

export default Buttons