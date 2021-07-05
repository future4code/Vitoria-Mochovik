import React, {useEffect, useState} from  'react';
import { CardPerfil, Card, Titulo, Bio, Carregando, 
    TituloCarregando, TituloFim, ImgCoracao, ContainerFim} from './styled'
import ImageCoracao from '../../../../img/coracao-partidofechado.png'

const CardPessoa = ({person, load}) => {
    
    return (
        <div> 
            <div>
                { load ? 
                    <Carregando>
                        <TituloCarregando> Carregando ...</TituloCarregando> 
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
                    : <ContainerFim>
                        <TituloFim> A lista de Matches de hoje acabou!  </TituloFim>
                        <ImgCoracao src={ImageCoracao} />
                    </ContainerFim>
                }

                
            </div>
        </div>
    )
}

export default CardPessoa