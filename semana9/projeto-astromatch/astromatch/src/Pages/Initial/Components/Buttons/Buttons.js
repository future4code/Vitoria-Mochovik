import React, {useEffect, useState} from  'react';
import  ImageDelete  from '../../../../img/icone-excluir.png';
import ImageCoracao from '../../../../img/icone-coracaoComBorda.png'
import { Delete, Gostei, Container} from './styled.js'
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
        <Container>
            <Delete  onClick={deleteClick}> X </Delete>
            <Gostei src={ImageCoracao} onClick={gosteiClick}/>
        </Container>
    )

}

export default Buttons