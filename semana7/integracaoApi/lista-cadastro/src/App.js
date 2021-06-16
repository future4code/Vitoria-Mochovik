import logo from './logo.svg';
import './App.css';
import React from "react";
import axios from "axios";
import TelaCadastro from './Components/TelaCadastro'
import TelaListaPessoasCadastradas from './Components/TelaListaPessoasCadastradas'


export default class App extends React.Component {
 
  state = {
    page: "cadastro",

  }

  mudarTela = () => {
    switch (this.state.page) {
      case "cadastro":
        return <TelaCadastro irParaListaPessoasCadastradas={this.irParaListaPessoasCadastradas} />
      case "listaPessoasCadastradas":
        return <TelaListaPessoasCadastradas irParaCadastro={this.irParaCadastro} />
      default:
        return <div> Erro </div>
    }
  }

  irParaCadastro = () => {
    this.setState({ page: "cadastro"})
  }

  irParaListaPessoasCadastradas = () => {
    this.setState({ page: "listaPessoasCadastradas"})
  }

  render () {
    return (
      <div>
        {this.mudarTela()}
        
      </div>
    );
  }
}

