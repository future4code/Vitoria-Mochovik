import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Header  from '../../header/Header'
import caminho from '../../components/ImgPlanets'

import { ContainerCard, ContainerImg, ImgPlanet, ContainerViagem,
ContainerCards } from './styled'


const ListTripsPage = () => {
    const [trips, setTrips] = useState([])
    const [loading, setLoading] = useState(false)

    const getListTrip = async() => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/vitoria-mochovik-molina/trips`
        
        try {
            const res = await axios.get(url)
            setTrips(res.data.trips)
            setLoading(false)

        }
        catch(err){
            alert("Ocorreu um erro ao carregar as viagens, por favor tente novamente!")
        }
    }

    useEffect(() => {
        getListTrip()
        setLoading(true)
    }, [])

    const tripDetails = trips.map((information) => {
        const date = information.date
        return(
            <ContainerCards key={information.id}>
                <ContainerCard >
                    <ContainerImg>
                        <ImgPlanet src={caminho(information.planet)} />
                    </ContainerImg>
                    <ContainerViagem>
                        <p> <b> Nome: </b>{information.name} </p>
                        <p> <b>Descrição:  </b> {information.description}</p>
                        <p> <b>Planeta: </b> {information.planet}</p>
                        <p> <b>Duração: </b> {information.durationInDays}</p>
                        { (information.date.indexOf("-") != -1) ?
                            <p> <b>Data: </b> {information.date.split("-")[2]} / {information.date.split("-")[1]} / {information.date.split("-")[0]} </p>
                            : <p> <b>Data: </b> {information.date} </p> }
                        </ContainerViagem>
                </ContainerCard>
            </ContainerCards>
        )
    })
    return(
        <div>
            <Header />
            { loading ? 
            <div> 
                <p> Carregando... </p>
            </div>
            : trips.length != 0 ?
                <div> {tripDetails} </div>
                : <p> Nenhuma viagem encontrada </p>}
            
        </div>
    )
}
export default ListTripsPage;