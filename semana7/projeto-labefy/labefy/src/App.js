import axios from 'axios';
import React from 'react';
import TelaCriarPlaylist from './Components/TelaCriarPlaylist.js'
import TelaVisualizarPlaylist from './Components/TelaVisualizarPlaylist.js'

export default class App extends React.Component {
  
  state = {
    pageNow: "",
  }
  
  changePage = () => {
    switch(this.state.pageNow){
      case "telaCriarPlaylist":
        return<TelaCriarPlaylist />
      case "telaVisualizarPlaylist":
        return<TelaVisualizarPlaylist />
      
    }
  }

  irParaPageCriarPlaylist = () => {
    this.setState({ pageNow: "telaCriarPlaylist"})
  }

  irParaPageVisualizarPlaylist =() => {
    this.setState({ pageNow: "telaVisualizarPlaylist"})
  }


  render() {
    return (
      <div>
        <header>
          <button onClick={this.irParaPageCriarPlaylist}> Criar uma playlist</button>
        <button onClick={this.irParaPageVisualizarPlaylist}> Visualizar minhas playlist</button>
        </header>
        {this.changePage()}
      </div>
    )
  }
}