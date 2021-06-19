import axios from 'axios';
import React from 'react';
import styled from 'styled-components'

const InputPlaylist = styled.input`
    height: 30px;
    width: 350px;
`

const Button = styled.button`
    height: 36px;
    width: 80px;
    background-color: #7572FF;
    border:none;
    color: white;

    &:hover {
        cursor: pointer;
    }

`

const Main = styled.main`
    display: flex;
    justify-content: center;
    margin-top: 40px;

`

const ContainerAddPlaylist = styled.div`
    height: 150px;
    /* background-color: blue; */

`

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
            <Main>
                <ContainerAddPlaylist>
                    <InputPlaylist 
                        placeholder={"Nome da playlist"}
                        onChange={this.onChangeNamePlaylist}
                        value={this.state.namePlaylist}
                    />
                    <Button onClick={this.createPlaylist}> Cadastrar</Button>
                </ContainerAddPlaylist>
            </Main>
        )
    }
}