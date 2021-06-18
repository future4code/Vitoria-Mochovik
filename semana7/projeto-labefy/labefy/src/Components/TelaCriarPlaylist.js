import axios from 'axios';
import React from 'react';

export default class TelaVisualizarPlaylist extends React.Component {

    state = {
        namePlaylist: "",
    }

    createPlaylist = () => {
        const url= `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`
        const headers = {
            headers: {
                Authorization: "vitoria-mochovik-molina"
            }
        }

        const body = {
            name: this.state.namePlaylist
        }

        axios.post(url, body, headers) 
        .then((res) => {
            alert("Playlist cadastrada com sucesso!")
            this.setState({ namePlaylist: ""})
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
    }

    onChangeNamePlaylist = (event) => {
        this.setState({ namePlaylist: event.target.value})
    }

    render() {
        return(
            <div>
                <input 
                    placeholder={"Nome da playlist"}
                    onChange={this.onChangeNamePlaylist}
                    value={this.state.namePlaylist}
                />
                <button onClick={this.createPlaylist}> Cadastrar</button>
            </div>
        )
    }
}