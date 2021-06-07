import logo from './logo.svg';
import './App.css';
import Etapa1 from './components/Etapa1'
import Etapa2 from './components/Etapa2'
import Etapa3 from './components/Etapa3'
import Final from './components/Final'
import React from 'react';
import styled from 'styled-components';

const Button = styled.button `
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  border: 1px solid black;
  cursor: pointer;
  width: 180px;
  background-color: #228B22;
  font-size: 20px;
  margin: 15px;
  color: black;

  &:hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.4);
  }

`


const ContainerButton = styled.div `
  display: flex;
  justify-content: center;
  height: 100vh;
  background-color: #836FFF;
`



export class App extends React.Component {

  state = {
    etapa: 1,
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1/>
      case 2:
        return <Etapa2/>
      case 3:
        return <Etapa3/>
      case 4:
        return <Final/>
      default :
        <div></div>
    }
  }

  irParaProximaEtapa = () => {
    // this.setState({etapa: 2})
    
      const novoValorEtapa = this.state.etapa < 4 ?  this.state.etapa + 1 : 1
      this.setState({ etapa: novoValorEtapa})
   
  }

  render() {
    return (
      <div>
        {this.renderizaEtapa()}
        <ContainerButton>
          <Button onClick={this.irParaProximaEtapa}>Próxima etapa</Button>
        </ContainerButton>
      </div>
    );
  }
}

export default App;
