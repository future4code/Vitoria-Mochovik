import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import TelaVisualizarPlaylist from './TelaVisualizarPlaylist.js'


const CardMusic = styled.div`
    

    padding:0 35px ;
    background-color: #F6E8EA;

    
    border-bottom: 1px solid black;
    border-left: 1px solid black;
    border-right: 1px solid black;
    align-items: center;

`

const NomeMusic = styled.p`


`

const Audio = styled.audio`
    width: 100%;
    background-color: #aca1ff;
    margin-top: 15px;

`

const ButtonDelete = styled.button`
    height: 28px;
    font-family: Arial, Helvetica, sans-serif;
    padding: 5px;
    border: none;
    color: white;
    border-radius: 5px;
    border: 1px solid white;
    background-color: #7572ff;
    width: 150px;
    font-size: 15px;
    
    
    &:hover {
        cursor: pointer;
    }
  

`

const Titulo = styled.h1`
    text-align: center;

`

const ContainerMusic = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
 
`

const ButtonAdd = styled.button`
    font-family: Arial, Helvetica, sans-serif;
    padding: 10px;
    border: none;
    color: white;
    border-radius: 5px;
    border: 1px solid white;
    /* box-shadow: 0 5px 0 #210053; */
    transition: all 0.5s;
    font-size: 15px;
    background-color: #EE617F;

    &:hover {
        cursor: pointer;
    }
    


`

const ContainerButtonAdd = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 25px;
    

`

const ContainerInput = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;
    height: 30px;


`

const ButtonAdicionar = styled.button`
    height: 36px;
    width: 80px;
    background-color: #7572FF;
    border:none;
    color: white;

    &:hover {
        cursor: pointer;
    }
`
const Input = styled.input`
    height: 30px;
    width: 350px;

`


export default class TelaInformation extends React.Component {

    state = {
        musicas: [],
        adicionarMusic: false,
        inputArtista: "",
        inputName: "",
        inputUrl: ""

    }
    
    componentDidMount() {
        this.getMusicasPlaylist()
    }


    getMusicasPlaylist =() => {

        
        
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`
        const headers = {
            headers: {
                Authorization: "vitoria-mochovik-molina"
            }
        }

        axios.get(url, headers)
        .then((res) => {
            this.setState({ musicas: res.data.result.tracks})
            
        })
        .catch((err) => {
            alert("Não consegui encontrar as músicas",err.response.data.message)
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
            alert("Não consegui adicionar a música, por favor tente novamente")
        })
    }

    deleteMusic = (id) => {

        if(window.confirm("Tem certeza que deseja excluir?")) {
            const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks/${id}`
            const headers = {
                headers: {
                    Authorization: "vitoria-mochovik-molina"
                }
            }

            axios.delete(url, headers)
            .then((res) => {
                alert("musica apagada com sucesso")
                this.getMusicasPlaylist()
            })
            .catch((err) => {
                alert("Não consegui apagar a música ")
            })
        }

    }

    render() {

        const musicList = this.state.musicas.map((musica) => {
            return(
                <CardMusic>
                    <ContainerMusic> 
                        <NomeMusic> {musica.name}</NomeMusic>
                        <ButtonDelete onClick={() => this.deleteMusic(musica.id)}> Excluir música</ButtonDelete>
                    </ContainerMusic>
                    <Audio controls="controls">
                        <source src={musica.url} type="audio/ogg" />
                    </Audio> 
                    
                </CardMusic>
            )
        })
      

        return (
            <div>
                <Titulo >{this.props.playlistName}</Titulo>
                
                {this.state.adicionarMusic === true ? 
                    <ContainerInput>
                        <Input 
                            value={this.state.inputName}   
                            onChange={this.onChangeInputName}
                            placeholder={"nome da musica"}
                        />
                        <Input
                            value={this.state.inputArtista}
                            onChange={this.onChangeInputArtista}
                            placeholder={"artista"}
                        />
                        <Input
                            value={this.state.inputUrl}
                            onChange={this.onChangeUrl}
                            placeholder={"url da musica"}
                        />
                        <ButtonAdicionar onClick={this.AdicionarMucisPlaylist}> Adicionar </ButtonAdicionar>
                    </ContainerInput>
            
                
                : 
                <div>
                    
                    <ContainerButtonAdd> 
                        <ButtonAdd onClick={this.onChangeadicionarMusic}> ADICIONAR MÚSICA</ButtonAdd>
                    </ContainerButtonAdd>
                    {musicList.length === 0  ? 
                        <div> 
                            <p>Não existe nenhuma música nessa playlist </p>
                            
                        </div>
                    :   
                    <div>
                        {musicList}
                    </div>}
                    
                </div>}
            </div>
        )
    }
}