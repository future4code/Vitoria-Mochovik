import axios from 'axios';
import React from 'react';


export default class TelaListaPessoasCadastradas extends React.Component {
    
    state = {
        usuarios: []
    }

    componentDidMount = () => {
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
    
    render() {

        const listaUsuario = this.state.usuarios.map((usuario) => {
            return <div key={usuario.id}> {usuario.name} </div>
        })
        return (
            <div>
                <button onClick={this.props.irParaCadastro}> Ir para cadastro </button>
                {listaUsuario}
            </div>
        )
    }
}