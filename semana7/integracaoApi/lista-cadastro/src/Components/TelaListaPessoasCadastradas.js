import axios from 'axios';
import React from 'react';
import styled from 'styled-components'
import TelaInformacoesUser from './TelaInformacoesUser';
import IconePessoa from '../img/icone-lista3.png'
import Excluir from '../img/excluir.png'
import BackgroundImage from '../img/back-lista.jpg'



const CardNomes = styled.div `
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    display: flex;
    justify-content: space-between;
    background-color: white;
`
const ContainerButton = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px;
    

`

const Button = styled.button`
margin: 0px;

`

const IconeLista = styled.img`
    width: 80px;

`

const ContainerNome = styled.div`

`
const IconeExcluir = styled.img`
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;

`

const ContainerGeral = styled.div`
    background-image: url(${BackgroundImage});
    margin: 0px;
    padding: 0px;
    height: 100vh;

    button {
        
    }
    

`

const TituloLista = styled.h2`
    color: white;
    margin-left: 15px;
    

`

const Header = styled.div`
    background-color: #340059;
    margin: 0px;
    padding: 0px;
    height: 100px;
    width: 100%;
    position: fixed;
    top: 0;

    display:flex;
    align-items: center;
    

`

const ContainerLista = styled.div`
    margin-top: 250px;

`

export default class TelaListaPessoasCadastradas extends React.Component {
    
    state = {
        usuarios: [],
        busca: "",
    }

    componentDidMount() {
        this.pegarUsuarios()
    }


    pegarUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const headers = {
            headers: {
                Authorization: "vitoria-mochovik-molina"
            }
        }

        axios
        .get(url, headers)
        .then((res) => {
            // console.log(res)
            this.setState({ usuarios: res.data})
        })
        .catch((err) => {
            alert("Ocorreu um erro!")
        })
    }

    deleteUsuario = (id) => {

        let deletar = window.confirm("Tem certeza de que deseja deletar?") 

        if (deletar === true) {
            const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
            const headers = {
                headers: {
                    Authorization: "vitoria-mochovik-molina"
                }
            }

            axios.delete(url, headers)
            .then((res) => {
                // console.log(res)
                this.pegarUsuarios()
            })
            .catch((err) => {
                alert(err.response.data)
            })
        }
      
    }

    onChangeBusca = (event) => {
        this.setState({buscaNome: event.target.value})
    }
    
    buscar = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${this.state.buscaNome}&email=`
        const headers = {
            headers: {
                Authorization: "vitoria-mochovik-molina"
            }
        }

        axios.get(url, headers )
        .then((res) => {
            console.log("consegui")
            this.setState({usuarios: res.data})
        })
        .catch((err) => {
            console.log("não encontrei ele")
        })
    }

    render() {

        const listaUsuarios = this.state.usuarios.map((usuario) => {
            return (
                <CardNomes key={usuario.id}> 
                    <ContainerNome>
                        <IconeLista src={IconePessoa}/>
                        <p  onClick={() => this.props.irParaInformacoesUser(usuario.id)}
                            >{usuario.name}  
                        </p>
                    </ContainerNome>
                    
                    <IconeExcluir src={Excluir} onClick={() => this.deleteUsuario(usuario.id)}  />
                </CardNomes>
            )
        })

        
        return (
            <ContainerGeral>
                <Header> 
                    <TituloLista> Lista de Usuários Cadastrados </TituloLista>
                    <input 
                        type="text"
                        value={this.state.buscaNome}
                        onChange={this.onChangeBusca}
                        placeholder={"digite um nome"}
                
                    /> 
                    <button onClick={this.buscar}> Buscar </button>
                    <ContainerButton>
                        <Button onClick={this.props.irParaCadastro}> Voltar para cadastro </Button>
    
                    </ContainerButton>
                    
                </Header>
                <ContainerLista>
                    {listaUsuarios}
                </ContainerLista>
                
                 
            </ContainerGeral>
        )
    }
}