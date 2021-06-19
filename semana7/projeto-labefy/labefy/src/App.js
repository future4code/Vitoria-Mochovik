import axios from 'axios';
import React from 'react';
import TelaCriarPlaylist from './Components/TelaCriarPlaylist.js'
import TelaVisualizarPlaylist from './Components/TelaVisualizarPlaylist.js'
import TelaInformation from './Components/TelaInformation.js'
import Icone from './img/icone-simbolo2.png'
import styled from 'styled-components'
import IconePerfil from './img/icone-perfil2.png'
import IconeCoracao from './img/coracao3.png'


const IconeLogo = styled.img`
  width: 70px;
  margin-left: 20px;
  transition: all 1s;

  &:hover {
    -webkit-transform: rotateZ(360deg);
    transform: rotateZ(360deg);
    cursor: pointer;
  }

`

const Header = styled.header`
  background-color: #7572FF;
  height: 80px;
  display: flex;
  justify-content: space-between;
  
`

const Nome = styled.h3`
  margin-left: 10px;
  color: white;
  font-size: 25px;

`

const ContainerIcones = styled.div`
  display: flex;
  align-items: center;
  

`

const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;
  

`

const Perfil = styled.img`
  width: 40px;

  &:hover {
    cursor: pointer;
  }

`

const IconeGostei = styled.img`
  width: 30px;
  margin-right: 20px;

`

const Button = styled.button`
  margin-right: 20px;
  font-family: Arial, Helvetica, sans-serif;
  padding: 5px;
  border: none;
  color: white;
  border-radius: 5px;
  border: 1px solid white;
  /* box-shadow: 0 5px 0 #210053; */
  transition: all 0.5s;
  font-size: 15px;
  background-color: transparent;

  &:hover {
    cursor: pointer;
  }

`
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
        <Header>
          <ContainerIcones>
            <IconeLogo src={Icone}/>
            <Nome> LABEFY </Nome>
          </ContainerIcones>
          <ContainerButtons>
            <Button> HOME </Button>
            <Button onClick={this.irParaPageCriarPlaylist}> CREATE PLAYLIST</Button>
            <Button onClick={this.irParaPageVisualizarPlaylist}> SEE MY PLAYLIST</Button>
            <IconeGostei src={IconeCoracao} />
            <Perfil src={IconePerfil}/>
          </ContainerButtons>
        </Header>
        {/* {this.changePage()} */}
        {this.state.renderizacao}
      </div>
    )
  }
}