import React from 'react'

import axios from 'axios'



export default class App extends React.Component {
  
  state = {
    pokemons: [],
    picture: ""
  }

  componentDidMount() {
    this.getPokemons()
  }

  getPokemons = async () => {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=351&offset=0"
    )

    this.setState({ pokemons: response.data.results})
  }

  getPictures = async (event) => {
    const url = event.target.value
    const response = await axios.get(`${url}`)
    console.log("isso",response.data.sprites.front_default )


    this.setState({ picture: response.data.sprites.front_default })
  }
  
  render() {
    const pokemonList = this.state.pokemons.map((poke) => {
      return (
        <option key={poke.name} value={poke.url}>
          {poke.name}
        </option>
      )
    })
    return(
      <div>
        <h2> Vamos conhecer os Pokemons?</h2>
        <select onChange={this.getPictures}>
          <option>Selecione um pokemon </option>
          {pokemonList}
        </select>
        {this.state.picture && (
          <img src={this.state.picture} alt='foto do pokemon' />
        )} 
      </div>
    )
  }
  
   
    
}


