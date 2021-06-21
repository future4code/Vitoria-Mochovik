import axios from 'axios';
import React from 'react';
import styled from 'styled-components'


const Name = styled.p`
    

`

const CardMusicas = styled.div`
    display: flex;
    justify-content: space-between;
    padding:0 35px ;
    background-color: #F6E8EA;

    
    border-bottom: 1px solid black;
    border-left: 1px solid black;
    border-right: 1px solid black;
    align-items: center;
   
`

const ContainerAdd = styled.div``

const SelectPlaylist = styled.select``

const ButtonAddMusic = styled.button`
    background-color: #7275ff;
    font-family: Arial, Helvetica, sans-serif;
    padding: 5px;
    border: none;
    color: white;
    border-radius: 5px;
    border: 1px solid white;
     padding: 5px 15px;



    &:hover {
        cursor: pointer;
    }
`

const ContainerMusicas = styled.div`
    padding: 0px 15px;
    

`

const ContainerPesquisa = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
  
    


`

const ContainerSelect = styled.div`
    display: flex;
    align-self: center;
    margin-right: 25px;

`

const Titulo = styled.h2`
    display: flex;
    justify-content: center;
   
    

`

const Input = styled.input`
    height: 30px;
    width: 350px;
    margin-left: 25px;
`

const ButtonSearch = styled.button`
    
    background-color: #7572FF;
    border:none;
    color: white;
    width:100px;
    height: 37px;
    

    &:hover {
        cursor: pointer;
    }


`

const ContainerInput = styled.div`

`

const Select = styled.select`
     height: 30px;
`

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
        idPlaylist: "",
        renderizar: false
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
                Authorization: "Bearer BQAOPXatcBKPo_teqt92H_HgaeIPgy4aCM0-h6UM1IIeCQFtvJAJj751IDUrIhcLe4CWa7VUXMXx2WbgoRMwM22Gw0vPjG8OyrDxcpTCEfkI1WLh6Y0C_2ZJxzD2ibWCaIfCyLlSDR3jJ7wVP6QML1aGgQ9IP-Q",
                // access_token: "BQAOPXatcBKPo_teqt92H_HgaeIPgy4aCM0-h6UM1IIeCQFtvJAJj751IDUrIhcLe4CWa7VUXMXx2WbgoRMwM22Gw0vPjG8OyrDxcpTCEfkI1WLh6Y0C_2ZJxzD2ibWCaIfCyLlSDR3jJ7wVP6QML1aGgQ9IP-Q",
                // token_type: "Bearer",
                // expires_in: 3600,
                // refresh_token: "ba6f5cf8f2fb41859b8cf561a42a588d",
                // scope: "playlist-modify-private"
                        // https://accounts.spotify.com/authorize?response_type=code&client_id=0903c7f83f004cae9f99ffad745ca1ce&scope=playlist-modify-private&redirect_uri=https://labefy-vitoria-mochovik.surge.sh

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

                renderizar: true,

            })

            console.log("artist", res.data.artists)
            console.log("albuns", res.data.albums.items)
            console.log("playlist", res.data.playlists.items)
            console.log("tracks", res.data.tracks.items)
            console.log("shows", res.data.shows.items)
            console.log("episodes", res.data.episodes.items)
           
            console.log("spotufy", res.data)
            
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
                <CardMusicas key={artista.id}>
                    <p > {artista.name}</p>
                   
                </CardMusicas>
                
            )
        })

        const listaAlbuns = this.state.albunsDoSearch.map((artista) => {
            return(
                <CardMusicas key={artista.id}>
                    <p> {artista.name}</p>
                   
                </CardMusicas>
                
            )
        })

        const listaPlaylist = this.state.playlistsDoSearch.map((artista) => {
            return(
                <CardMusicas key={artista.id}>
                    <p> {artista.name}</p>
                    
                </CardMusicas>
                
            )
        })

        const listaTrack = this.state.tracksDoSearch.map((track) => {
            const stringArtistas = track.artists.map((artist) => {
                return artist.name
            }).join(", ")

            console.log("string array", stringArtistas)
            return(
                <CardMusicas key={track.id}>
                    <Name > {track.name}</Name>
                    
                    <ContainerAdd>
                        <SelectPlaylist onChange={this.onChangeValuePlaylist}>
                            <option> Selecione a playlist</option>
                            {
                                this.state.playlist.map((p) => {
                                    return(
                                        <option value={p.id}> {p.name} </option>
                                    )
                                })
                            }
                        </SelectPlaylist>
                        <ButtonAddMusic onClick={() => this.addMusicPlaylist(track.name, stringArtistas, track.preview_url)}> ADICIONAR</ButtonAddMusic>
                    </ContainerAdd>
                </CardMusicas>
                
            )
        })

        const listaShow = this.state.showsDoSearch.map((artista) => {
            return(
                <CardMusicas key={artista.id}>
                    <p > {artista.name}</p>
                   
                </CardMusicas>
                
            )
        })

        const listaEpisode = this.state.episodesDoSearch.map((artista) => {
            return(
                <CardMusicas key={artista.id}>
                    <p > {artista.name}</p>
                    
                </CardMusicas>
                
            )
        })

       console.log("state do artista", this.state.artistasDoSearch)
        return(
            
            <div>
                <ContainerPesquisa>
                    <ContainerInput>
                        <Input 
                            value={this.state.inputSearch}
                            onChange={this.onChangeInputSearch}
                            placeholder={"Artista, música, albuns..."}
                        />
                        <ButtonSearch onClick={this.getSearch}> PESQUISAR </ButtonSearch>
                    </ContainerInput>
                    {this.state.renderizar === true  ?
                        <ContainerSelect>
                            <Select onChange={this.onChangeSelect}>
                                <option > Selecione a categoria que deseja ver</option>
                                <option value={'#artistas'}> Artistas</option>
                                <option value={'#albuns'}> Albuns </option>
                                <option value={'#playlists'}> Playlists</option>
                                <option value={'#episodios'}> Episódios</option>
                                <option value={'#musicas'}> Músicas </option>
                            </Select>
                        </ContainerSelect>
                    : <></> }
                </ContainerPesquisa>
                
                {this.state.renderizar === true  ? 
                    <div>
                        <Titulo id='musicas'> MÚSICAS </Titulo>
                        <ContainerMusicas >
                            {listaTrack}
                        </ContainerMusicas>
                        <Titulo id='artistas'> ARTISTAS </Titulo>
                        <ContainerMusicas >
                            {listaArtistas}
                        </ContainerMusicas>
                        <Titulo id='albuns'> ALBUNS </Titulo>
                        <ContainerMusicas >
                            {listaAlbuns}
                        </ContainerMusicas>
                        <Titulo id='playlists'> PLAYLISTS </Titulo>
                        <ContainerMusicas >
                            {listaPlaylist}
                        </ContainerMusicas>
                        <Titulo id='episodios'> EPISÓDIOS </Titulo>
                        <ContainerMusicas >
                            {listaEpisode}
                        </ContainerMusicas>
                        <Titulo id='shows'>SHOW</Titulo>
                        <ContainerMusicas >
                            {listaShow}
                        </ContainerMusicas>
                    </div>
                : <div></div>}
    
            </div>
        )
    }
}