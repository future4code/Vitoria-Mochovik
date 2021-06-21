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


const ButtonDelete = styled.button`
   margin-bottom: 15px;
   padding: 5px;

    font-family: Arial, Helvetica, sans-serif;
    padding: 5px;
    border: none;
    color: #7572FF;
    border-radius: 5px;
    border: 1px solid #7572FF;
    width: 60px;
    font-size: 15px;
    transition: all 0.5s;

    &:hover {
        cursor: pointer;
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
    }


`

const ButtonInformation = styled.button`
    margin-bottom: 15px;
    padding: 5px;

    font-family: Arial, Helvetica, sans-serif;
    padding: 5px;
    border: none;
    color: white;
    border-radius: 5px;
    border: 1px solid white;
    background-color: #7572ff;
    width: 150px;
    font-size: 15px;
    transition: all 0.5s;

    &:hover {
        cursor: pointer;
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
    }


`

const Play = styled.img`
    width: 105px;
    transition: all 0.5s;

    &:hover {
        cursor: pointer;
        -webkit-transform: scale(1.4);
        transform: scale(1.4);
    }
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
                    <Play src={IconePlay}  onClick={() => this.props.irParaPageInformations(play.id, play.name)}/>
                    
                        <ButtonDelete onClick={() => this.deletePlaylist(play.id)}> Delete </ButtonDelete>
                        <ButtonInformation onClick={() => this.props.irParaPageInformations(play.id, play.name)}> Ver Playlist</ButtonInformation>
                    
                </CardPlaylist>
            )
        })
        return (
            <Main>
                {playlistList}
            </Main>
        )
    }
}