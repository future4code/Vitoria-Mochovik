import axios from 'axios';
import React from 'react';
import TelaVisualizarPlaylist from './TelaVisualizarPlaylist.js'


export default class TelaInformation extends React.Component {

    state = {
        musicas: []
    }
   
    getMusicasPlaylist =() => {
        console.log("props id", this.props.id)
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`
        const headers = {
            headers: {
                Authorization: "vitoria-mochovik-molina"
            }
        }

        axios.get(url, headers)
        .then((res) => {
            console.log("informacoes user res", res.data.result.tracks)
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
    
    }


    render() {

        const musicList = this.state.musicas.map((musica) => {
            return(
                <p> {musica.name}</p>
            )
        })

        return (
            <div>
                {this.getMusicasPlaylist()}
                {this.props.playlistName}
                {musicList}
            </div>
        )
    }
}