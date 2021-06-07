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
  render() {
    return (
      <div>
        <button>Próxima etapa</button>
      </div>
    );
  }
}

export default App;
