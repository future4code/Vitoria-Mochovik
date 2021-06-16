import React from 'react';
import axios from 'axios';

    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const headers = {
        headers: {
            Authorization: "vitoria-mochovik-molina"
        }
    }

export default class Cadastro extends React.Component {

    state = {
        listPessoas: [],
        inputEmail: "",
        inputName: ""
      }
    
      onChangeInputNome = (event) => {
        this.setState({ inputName: event.target.value })
      }
    
      onChangeInputEmail = (event) => {
        this.setState({ inputEmail: event.target.value})
      }
    
      criarUsuario = () => {
        const body = {
          name: this.state.inputName,
          email: this.state.inputEmail,
        }
    
        axios
          .post(url, body, headers)
          .then((res) => {
            alert("Usuário cadastrado com sucesso!")
            this.setState({ inputName: ""})
            this.setState({ inputEmail: ""})
          })
          .catch((err) => {
            alert(err.response.data.message)
          })
      }
    
    
    


    render() {
        return (
            <div>
                <p> Nome: </p>
                <input value={this.state.inputName} onChange={this.onChangeInputNome} /> 
                <p> E-mail</p>
                <input value={this.state.inputEmail} onChange={this.onChangeInputEmail} />
                <button onClick={this.criarUsuario}> Salvar</button>
                <button onClick={this.props.irParaListaPessoasCadastradas} > Ver lista de usuários</button> 
            </div>
        )
    }
}