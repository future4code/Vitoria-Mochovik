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
    renderizacao: <></> ,

  }

  componentDidMount() {
    this.setState({ renderizacao: 
      <TelaCadastro  
        irParaListaPessoasCadastradas={this.irParaListaPessoasCadastradas}>
      </TelaCadastro>
    })
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

  irParaInformacoesUser = (id) => {
    this.setState({ 
      page: "informacoesUser",
      renderizacao: <TelaInformacoesUser 
        irParaListaPessoasCadastradas={this.irParaListaPessoasCadastradas}
        id={id}
        deleteUsuario={this.deleteUsuario}
        />
    
    })
  }

  irParaCadastro = () => {
    this.setState({ 
      page: "cadastro",
      renderizacao: <TelaCadastro irParaListaPessoasCadastradas={this.irParaListaPessoasCadastradas} />

    })
  
  }

  irParaListaPessoasCadastradas = () => {
    console.log("aaa")
    this.setState({ 
      page: "listaPessoasCadastradas",
      renderizacao: <TelaListaPessoasCadastradas 
      irParaCadastro={this.irParaCadastro} 
      irParaInformacoesUser={this.irParaInformacoesUser} 
      />
    
    })
  }

  render () {
    return (
      <div>
        {/* {this.mudarTela()} */}
        
        {this.state.renderizacao}        
      </div>
    );
  }
}

