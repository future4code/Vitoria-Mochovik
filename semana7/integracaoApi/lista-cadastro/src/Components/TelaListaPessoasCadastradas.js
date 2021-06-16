import axios from 'axios';
import React from 'react';
import styled from 'styled-components'


const CardNomes = styled.div `
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    display: flex;
    justify-content: space-between;
`
const ContainerButton = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px;

`

const Button = styled.button`

`
export default class TelaListaPessoasCadastradas extends React.Component {
    
    state = {
        usuarios: []
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
            console.log(res)
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
                console.log(res)
                this.pegarUsuarios()
            })
            .catch((err) => {
                alert(err.response.data)
            })
        }
      
    }
        
    render() {

        const listaUsuarios = this.state.usuarios.map((usuario) => {
            return <CardNomes key={usuario.id}> 
                {usuario.name} 
                <button onClick={() => this.deleteUsuario(usuario.id)}> X </button>
            </CardNomes>
        })
        return (
            <div>
                <ContainerButton>
                    <Button onClick={this.props.irParaCadastro}> Ir para cadastro </Button>
                    
                </ContainerButton>
                <h2> Lista de Usuários Cadastrados </h2>
                {listaUsuarios}
            </div>
        )
    }
}