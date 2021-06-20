import axios from 'axios';
import React from 'react';
import styled from 'styled-components'


export default class TelaHome extends React.Component {

    state = {
        inputSearch: "",

        artistasDoSearch: [],
        albunsDoSearch: [],
        playlistsDoSearch: [],
        tracksDoSearch: [],
        showsDoSearch: [],
        episodesDoSearch: [],

        playlist: [],
        typeSearch: "",
        idPlaylist: ""
    }

    componentDidMount() {
        this.onChangeEscolherPlaylist()
    }
    onChangeInputSearch = (event) => {
        this.setState({ inputSearch: event.target.value})

    }

    getSearch = () => {
        const url = `https://api.spotify.com/v1/search?q=${this.state.inputSearch}&type=album,artist,playlist,track,show,episode`
        const headers = {
            headers: {
                Authorization: "Bearer BQDiGvzwpirxkwBsL9cmFyW8PYuIsX-LUeKAe8NwUH_Jab8nGaHoay8bmcLP74kT7D-OKJkfqjRKi3aMsS36EF51J_pU_3JHWZRCp-pq75DA90ZeDpYPc14G8D3-kEnEccu2_XGCdLlGj858-mqWFty2tfaGwmQ"
            }
        }

        axios.get(url, headers)
        .then((res) => {
            alert("requisitei o spotufy")
            this.setState({
                artistasDoSearch: res.data.artists.items,
                albunsDoSearch: res.data.albums.items,
                playlistsDoSearch: res.data.playlists.items,
                tracksDoSearch: res.data.tracks.items,
                showsDoSearch: res.data.shows.items,
                episodesDoSearch: res.data.episodes.items,

            })

            console.log("artist", res.data.artists)
            console.log("albuns", res.data.albums.items)
            console.log("playlist", res.data.playlists.items)
            console.log("tracks", res.data.tracks.items)
            console.log("shows", res.data.shows.items)
            console.log("episodes", res.data.episodes.items)
            // switch (this.state.typeSearch) {
            //     case "artist":
                    console.log("spotufy", res.data)
                    // this.setState({ itensDoSearch: res.data.artists.items}) 
            // }
            
            // this.setState({ artistasDoSearch: res.data})
            
        })
        .catch((err) => {
            alert("o stotifi me negou acesso", err.data)
        })
    }

    onChangeTypeSearch = (event) => {
        this.setState({ typeSearch: event.target.value})
    }

    onChangeSelect = (event) => {
        
        const resultSlip = window.location.href.split('#')
 
       const linkAtual = resultSlip[0]
       window.location.href = resultSlip[0] + event.target.value
       console.log("resultsplit", resultSlip)


    }

    onChangeEscolherPlaylist = () => {
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

    addMusicPlaylist =(nome, artistas, urlMusic) => {
        console.log("musica", nome )
        console.log("artistas", artistas )
        console.log("musica", urlMusic )
        const url= `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.idPlaylist}/tracks`
        const headers = {
            headers: {
                Authorization: "vitoria-mochovik-molina"
            }
        }

        const body = {
            name: nome,
            artist: artistas,
            url: urlMusic
        }

        axios.post(url, body, headers)
        .then((res) => {
            alert("musica adicionada")
        })
        .catch((err) => {
            alert("não consegui add tenta novamente", err.data)
        })
    }

    onChangeValuePlaylist = (event) => {
        console.log("vent", event.target.value)
        this.setState({idPlaylist: event.target.value })
    }
    render() {
        console.log("aquiiii eu de nvoooo")
        const listaArtistas = this.state.artistasDoSearch.map((artista) => {
            return(
                <div key={artista.id}>
                    <p > {artista.name}</p>
                    <p> {artista.type} </p>
                </div>
                
            )
        })

        const listaAlbuns = this.state.albunsDoSearch.map((artista) => {
            return(
                <div key={artista.id}>
                    <p > {artista.name}</p>
                    <p> {artista.type} </p>
                </div>
                
            )
        })

        const listaPlaylist = this.state.playlistsDoSearch.map((artista) => {
            return(
                <div key={artista.id}>
                    <p > {artista.name}</p>
                    <p> {artista.type} </p>
                </div>
                
            )
        })

        const listaTrack = this.state.tracksDoSearch.map((track) => {
            const stringArtistas = track.artists.map((artist) => {
                return artist.name
            }).join(", ")

            console.log("string array", stringArtistas)
            return(
                <div key={track.id}>
                    <p > {track.name}</p>
                    <p> {track.type} </p>
                    <select onChange={this.onChangeValuePlaylist}>
                        <option> Selecione a playlist</option>
                        {
                            this.state.playlist.map((p) => {
                                return(
                                    <option value={p.id}> {p.name} </option>
                                )
                            })
                        }
                    </select>
                    <button onClick={() => this.addMusicPlaylist(track.name, stringArtistas, track.preview_url)}> Adicionar</button>
                </div>
                
            )
        })

        const listaShow = this.state.showsDoSearch.map((artista) => {
            return(
                <div key={artista.id}>
                    <p > {artista.name}</p>
                    <p> {artista.type} </p>
                </div>
                
            )
        })

        const listaEpisode = this.state.episodesDoSearch.map((artista) => {
            return(
                <div key={artista.id}>
                    <p > {artista.name}</p>
                    <p> {artista.type} </p>
                </div>
                
            )
        })

       
        
        console.log("valot do estado typesearch", this.state.typeSearch)
        return(
            <div>
                {/* {this.state.typeSearch ?  */}
                    <div>
                        <input 
                            value={this.state.inputSearch}
                            onChange={this.onChangeInputSearch}
                            placeholder={this.state.typeSearch}
                        />
                        <button onClick={this.getSearch}> Pesquisar </button>
                        <p> Nome | Tipo | Genero</p>
                    </div>
                {/* <select onChange={this.onChangeTypeSearch}> 
                    <option > Selecione o que deseja pesquisar</option>
                    <option value={"artist"}> Artista</option>
                    <option value={"album"}> Albuns</option>
                    <option value={"playlist"}> Playlist</option>
                    <option value={"episode"}> Episódio </option>
                </select> 
             */}
                <a href='#show' >show</a>
                <select onChange={this.onChangeSelect}>
                    <option > Selecione a categoria</option>
                    <option value={'#artistas'}> Artistas</option>
                    <option value={'#albuns'}> Albuns </option>
                    <option value={'#playlists'}> Playlists</option>
                    <option value={'#episodios'}> Episódios</option>
                    <option value={'#musicas'}> Músicas </option>
                </select>
                <h2 id='artistas'> Artistas </h2>
                {listaArtistas}
                <h2 id='albuns'> Albuns </h2>
                {listaAlbuns}
                <h2 id='playlists'> Playlists </h2>
                {listaPlaylist}
                <h2 id='episodios'> Episódios </h2>
                {listaEpisode}
                <h2 id='shows'>Show</h2>
                {listaShow}
                <h2 id='musicas'> Músicas </h2>
                {listaTrack}

            </div>
        )
    }
}