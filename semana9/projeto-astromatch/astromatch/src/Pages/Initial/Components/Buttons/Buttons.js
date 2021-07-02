import React, {useEffect, useState} from  'react';
import  ImageDelete  from '../../../../img/icone-excluir.png';
import ImageCoracao from '../../../../img/icone-coracao.png'
import { Delete, Gostei} from './styled.js'
import postChoosePerson from '../../../../Requests/ChoosePerson'


const Buttons = ({person, setNewPerson, newPerson}) => {

    const deleteClick = () => {
        postChoosePerson(person.id, false)
        setNewPerson(!newPerson)
    }

    const gosteiClick = () => {
        postChoosePerson(person.id, true)
        setNewPerson(!newPerson)
    }

    return(
        <div>
            <Delete src={ImageDelete} onClick={deleteClick} />
            <Gostei src={ImageCoracao} onClick={gosteiClick}/>
        </div>
    )

}

export default Buttons