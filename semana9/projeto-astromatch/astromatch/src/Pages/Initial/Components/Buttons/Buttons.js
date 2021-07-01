import React, {useEffect, useState} from  'react';
import  ImageDelete  from '../../../../img/icone-excluir.png';
import ImageCoracao from '../../../../img/icone-coracao.png'
import { Delete, Gostei} from './styled.js'


const Buttons = (props) => {

    return(
        <div>
            <Delete src={ImageDelete} />
            <Gostei src={ImageCoracao} />
        </div>
    )

}

export default Buttons