import axios from 'axios';
import React from 'react';
import styled from 'styled-components'


export default class TelaHome extends React.Component {

    state = {
        inputSearch: "",
        artistasDoSearch: [],
    }

    onChangeInputSearch = (event) => {
        this.setState({ inputSearch: event.target.value})
    }

    getSearch = () => {
        const url = `https://api.spotify.com/v1/search?q=${this.state.inputSearch}&type=artist`
        const headers = {
            headers: {
                Authorization: "Bearer BQBfap5ozAx5yEaFETGj6BqLdbsn-_jQICcQG4H4WsZnLAVmyoBYTQQnB5oPKwhyScDXUcD7YvspuySCE6SKmXhpgMB2unsNpGN2efQYZG9uTUqO3gVmUyBpfm9Gsn43mSDE-bhN_cEkQs5Kyl0rM3RE99SAIVU"
            }
        }

        axios.get(url, headers)
        .then((res) => {
            alert("requisitei o spotufy")
            console.log("spotufy", res.data.artists.items)
            this.setState({ artistasDoSearch: res.data.artists.items})
        })
        .catch((err) => {
            alert("o stotifi me negou acesso")
        })
    }

    render() {
        const listaArtistas = this.state.artistasDoSearch.map((artista) => {
            return(
                <p key={artista.id}> {artista.name}</p>
            )
        })
        return(
            <div>
                <input 
                    value={this.state.inputSearch}
                    onChange={this.onChangeInputSearch}
                    placeholder={"Artista"}
                />
                <button onClick={this.getSearch}> Pesquisar </button>
                {listaArtistas}
            </div>
        )
    }
}