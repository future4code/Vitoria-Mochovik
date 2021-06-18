import axios from 'axios';
import React from 'react';
import TelaCriarPlaylist from './Components/TelaCriarPlaylist.js'
import TelaVisualizarPlaylist from './Components/TelaVisualizarPlaylist.js'
import TelaInformation from './Components/TelaInformation.js'

export default class App extends React.Component {
  
  state = {
    pageNow: "",
    renderizacao: <></>
  }
  
  changePage = () => {
    switch(this.state.pageNow){
      case "telaCriarPlaylist":
        return<TelaCriarPlaylist />
      case "telaVisualizarPlaylist":
        return<TelaVisualizarPlaylist 
        irParaPageInformations={this.irParaPageInformations}
        />
      case "telaInformation":
        return <TelaInformation />
    }
  }

  irParaPageCriarPlaylist = () => {
    this.setState({ 
      pageNow: "telaCriarPlaylist",
      renderizacao: <TelaCriarPlaylist />
    })
  }

  irParaPageVisualizarPlaylist =() => {
    this.setState({ 
      pageNow: "telaVisualizarPlaylist",
      renderizacao: <TelaVisualizarPlaylist 
        irParaPageInformations={this.irParaPageInformations}
      />
  
    })
  }

  irParaPageInformations = (id, playlistName) => {
    console.log("id no app", id)
    this.setState({
      pageNow: "telaInformation",
      renderizacao: <TelaInformation
        playlistName={playlistName}
        id={id}

      />
    })
  }


  render() {
    return (
      <div>
        <header>
          <button onClick={this.irParaPageCriarPlaylist}> Criar uma playlist</button>
        <button onClick={this.irParaPageVisualizarPlaylist}> Visualizar minhas playlist</button>
        </header>
        {/* {this.changePage()} */}
        {this.state.renderizacao}
      </div>
    )
  }
}