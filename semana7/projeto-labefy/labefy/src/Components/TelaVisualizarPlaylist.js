import axios from 'axios';
import React from 'react';

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

    render() {

        const playlistList = this.state.playlist.map((play) => {
            return (
                <div>
                   <p> {play.name}</p>
                   <button onClick={() => this.deletePlaylist(play.id)}> Excluir </button>
                    
                </div>
            )
        })
        console.log("estado dab playlist", this.state.playlist)
        console.log("lista rederizada", playlistList)
        return (
            <div>
                {playlistList}
            </div>
        )
    }
}