import axios from 'axios';
import React from 'react';
import TelaInformation from './TelaInformation.js'
import styled from 'styled-components'
import IconePlay from '../img/play.png'


const CardPlaylist = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-shadow: 2px 2px 5px darkgray;
    text-align: center;
    width: 280px;
    background-color: #F2EDF0;

    margin: 15px;
`

const Main = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 35px;
`


const Name = styled.h2``


const ButtonDelete = styled.button``

const ButtonInformation = styled.button``

const Play = styled.img`
    width: 105px;
`


export default class TelaVisualizarPlaylist extends React.Component {
    state = {
        playlist: [],
    }

    componentDidMount() {
        this.getAllPlaylist()
    }
    getAllPlaylist =() => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`
        const headers = {
            headers: {
                Authorization: "vitoria-mochovik-molina"
            }
        }

        axios.get(url, headers)
        .then((res) => {
            console.log("res.data", res.data)
            this.setState({ playlist: res.data.result.list})
        })
        .catch((err) => {
            alert("pegar", err.response.data.message)
        })
    }

    deletePlaylist = (id) => {

        if(window.confirm("Tem certeza que deseja excluir?")) {
            const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
            const headers = {
                headers: {
                    Authorization: "vitoria-mochovik-molina"
                }
            }

            axios.delete(url, headers)
            .then((res) => {
                alert("playlist excluida")
                this.getAllPlaylist()
            })
            .catch((err) => {
                alert(err.response.data.message)
            })    
        }
        
    }

    

    render() {

        const playlistList = this.state.playlist.map((play) => {
            return (
                <CardPlaylist>
                   <Name> {play.name}</Name>
                   <Play src={IconePlay} />
                   <ButtonDelete onClick={() => this.deletePlaylist(play.id)}> Excluir </ButtonDelete>
                   <ButtonInformation onClick={() => this.props.irParaPageInformations(play.id, play.name)}> Ver músicas</ButtonInformation>
                    
                </CardPlaylist>
            )
        })
        console.log("estado dab playlist", this.state.playlist)
        console.log("lista rederizada", playlistList)
        return (
            <Main>
                {playlistList}
            </Main>
        )
    }
}