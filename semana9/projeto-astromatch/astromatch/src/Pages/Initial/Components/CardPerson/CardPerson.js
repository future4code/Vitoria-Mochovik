import React, {useEffect, useState} from  'react';
import { CardPerfil, Card, Titulo, Bio, Carregando} from './styled'


const CardPessoa = ({person, load}) => {
    
    return (
        <div> 
            <div>
                { load ? 
                    <Carregando>
                        <p> Carregando</p> 
                        <div class="content-coracao">
                            <div class="square"></div>
                            <div class="circle"></div>
                        </div>  
                   </Carregando>
                : person ?
                    <CardPerfil>
                        <Card style={{ backgroundImage: "url(" + person.photo + ")" }} />
                        <img className="imagePerson" src={person.photo} />
                            <div className="cardInformation">
                                <Titulo> {person.name}, {person.age} </Titulo>
                                <Bio> {person.bio} </Bio>
                            </div>
                    </CardPerfil> 
                    : <div>
                    <p> A lista de Matches de hoje acabou!  </p>
                    </div>
                }

                
            </div>
        </div>
    )
}

export default CardPessoa