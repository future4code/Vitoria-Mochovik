import logo from './logo.svg';
import './App.css';
import React from "react";
import axios from "axios";


export default class App extends React.Component {
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

  render () {
    return (
      <div>
        <p> Nome: </p>
         <input value={this.state.inputName} onChange={this.onChangeInputNome} /> 
        <p> E-mail</p>
        <input value={this.state.inputEmail} onChange={this.onChangeInputEmail} />
        <button> Salvar</button>
      </div>
    );
  }
}

