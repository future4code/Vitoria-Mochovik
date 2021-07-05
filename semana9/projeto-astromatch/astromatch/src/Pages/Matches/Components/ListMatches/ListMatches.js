import React from  'react';
import {ImagePerson, CardContato, Titulo, CardTitulo, ImgTriste, ContainerSemMatches} from './styled'
import Triste from '../../../../img/triste.png'



const ListMatches = ({listMatches, load}) =>{
    const matches = listMatches.map((person) => {
        return(
            <CardContato key={person.id}>
                <ImagePerson src={person.photo} />
                <p> {person.name}</p>
            </CardContato>
        )
    })
    return(
        <div> 
            <CardTitulo>
                <Titulo> Seus Contatos ♥️ </Titulo>
            </CardTitulo>
            <div>
                { load ?
                    <div>
                        <p> Carregando ... </p>
                    </div>
                : listMatches.length === 0 ?
                    <ContainerSemMatches>
                        <p> Nenhum match</p>
                        <ImgTriste src={Triste} />
                    </ContainerSemMatches>
                : <div>
                    {matches}
                </div> }
            </div>
        </div>
    )
}

export default ListMatches