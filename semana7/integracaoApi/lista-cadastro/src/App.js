import logo from './logo.svg';
import './App.css';
import React from "react";
import axios from "axios";
import TelaCadastro from './Components/TelaCadastro'
import TelaListaPessoasCadastradas from './Components/TelaListaPessoasCadastradas'
import TelaInformacoesUser from './Components/TelaInformacoesUser'


export default class App extends React.Component {
 
  state = {
    page: "cadastro",

  }

  mudarTela = () => {
    switch (this.state.page) {
      case "cadastro":
        return <TelaCadastro irParaListaPessoasCadastradas={this.irParaListaPessoasCadastradas} />
      case "listaPessoasCadastradas":
        return <TelaListaPessoasCadastradas 
          irParaCadastro={this.irParaCadastro} 
          irParaInformacoesUser={this.irParaInformacoesUser} 
        />
      case "informacoesUser":
        return <TelaInformacoesUser irParaListaPessoasCadastradas={this.irParaListaPessoasCadastradas} />
      default:
        return <div> Erro </div>
    }
  }

  irParaInformacoesUser = () => {
    this.setState({ page: "informacoesUser"})
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

