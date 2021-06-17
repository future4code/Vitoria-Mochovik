import axios from 'axios';
import React from 'react';
import styled from 'styled-components'


export default class TelaInformacoesUser extends React.Component {
    
    state = {
        usuario: {

        }
    }

    componentDidMount() {
        this.pegarUsuario(this.props.id)
    }

    pegarUsuario = () => {

        // if (this.props.id !== "")

        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.props.id}`
        const headers = {
            headers: {
                Authorization: "vitoria-mochovik-molina"
            }
        }

        axios
        .get(url, headers)
        .then((res) => {
            
            this.setState({ usuario: res.data})
        })
        .catch((err) => {
            
            alert("Algo deu errado!!!")
        })

        
    }
    
    deleteUsuario = () => {

        let deletar = window.confirm("Tem certeza de que deseja deletar?") 
        
        if (deletar === true) {
            const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.props.id}`
            const headers = {
                headers: {
                    Authorization: "vitoria-mochovik-molina"
                }
            }

            axios.delete(url, headers)
            .then((res) => {
                console.log(res)
                alert("deu certo")
                this.setState({ usuario: {}})
                
                
            })
            .catch((err) => {
                // alert(err.response.data)
                alert("algo deu errado")
                this.pegarUsuario()
            })
        }

        console.log("nova lista usuario", this.state.usuario.id)
      
    }
    
    render() {
        console.log("nova lista usuario2", this.state.usuario.id)
        return (
            <div>
                <button onClick={this.props.irParaListaPessoasCadastradas}> Voltar</button>
                {this.state.usuario.name ? 
                    <div key={this.state.usuario.id}>
                        <p> Nome: {this.state.usuario.name}</p>
                        <p> E-mail: {this.state.usuario.email}</p>
                    </div>
                : <div> Usuario deletado</div>}
                <button onClick={this.deleteUsuario}
                
                > Deletar usuário</button>
               
            </div>
        )
    }
}