import React from  'react';
import  ImageDelete  from '../../../../img/coracao-partido.png';
import ImageCoracao from '../../../../img/icone-coracaoComBorda.png'
import { Delete, Gostei, Container} from './styled.js'
import postChoosePerson from '../../../../Requests/ChoosePerson'


const Buttons = ({person, setNewPerson, newPerson, setLoad, load}) => {

    const deleteClick = () => {
        postChoosePerson(person.id, false)
        setNewPerson(!newPerson)
        setLoad(true)

    }

    const gosteiClick = () => {
        postChoosePerson(person.id, true)
        setNewPerson(!newPerson)
        setLoad(true)
    }

    return(
        <div>
            { load ? 
                <div></div>
            : 
                <Container>
                    <Delete src={ImageDelete} onClick={deleteClick}/>
                    <Gostei src={ImageCoracao} onClick={gosteiClick}/>
                </Container>
            }
        </div>
    )

}

export default Buttons