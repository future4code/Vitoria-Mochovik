import axios from 'axios';
import React from 'react';
import TelaVisualizarPlaylist from './TelaVisualizarPlaylist.js'


export default class TelaInformation extends React.Component {

    state = {
        musicas: [],
        adicionarMusic: false,
        inputArtista: "",
        inputName: "",
        inputUrl: ""

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
            this.setState({ musicas: res.data.result.tracks})
            console.log("informacoes user res", res.data.result.tracks)
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
    
    }

    onChangeadicionarMusic =() => {
        this.setState({adicionarMusic: true})
    }

    onChangeInputName = (event) => {
        this.setState({ inputName: event.target.value})
    }

    onChangeInputArtista = (event) => {
        this.setState({ inputArtista: event.target.value})
    }

    onChangeUrl = (event) => {
        this.setState({inputUrl: event.target.value })
    }

    AdicionarMucisPlaylist = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`
        const headers = {
            headers: {
                Authorization: "vitoria-mochovik-molina"
            }
        }

        const body = {
            name: this.state.inputName,
            artist: this.state.inputArtista,
            url: this.state.inputUrl
        }

        axios.post(url, body, headers)
        .then((res) => {
            this.getMusicasPlaylist()
            this.setState({
                inputName: "",
                inputArtista: "",
                inputUrl: "",
                adicionarMusic: false,

            })
        })
        .catch((err) => {
            alert("nao deu")
        })
    }


    render() {

        const musicList = this.state.musicas.map((musica) => {
            return(
                <div>
                    <p> {musica.name}</p>
                    <audio controls="controls">
                        <source src={musica.url} type="audio/ogg" />
                    </audio> 
                </div>
            )
        })
        console.log("music list", musicList)

        return (
            <div>
                {this.getMusicasPlaylist()}
                {this.props.playlistName}
                {musicList}


                {this.state.adicionarMusic === true ? 
                    <div>
                        <input 
                            value={this.state.inputName}   
                            onChange={this.onChangeInputName}
                            placeholder={"nome da musica"}
                        />
                        <input
                            value={this.state.inputArtista}
                            onChange={this.onChangeInputArtista}
                            placeholder={"artista"}
                        />
                        <input
                            value={this.state.inputUrl}
                            onChange={this.onChangeUrl}
                            placeholder={"url da musica"}
                        />
                        <button onClick={this.AdicionarMucisPlaylist}> Adicionar </button>
                    </div>
            
                
                : <button onClick={this.onChangeadicionarMusic}> Adicionar música</button> }
            </div>
        )
    }
}