import logo from './logo.svg';
import './App.css';
import Etapa1 from './components/Etapa1'
import Etapa2 from './components/Etapa2'
import Etapa3 from './components/Etapa3'
import Final from './components/Final'
import React from 'react';

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
        <button onClick={this.irParaProximaEtapa}>Próxima etapa</button>
      </div>
    );
  }
}

export default App;
