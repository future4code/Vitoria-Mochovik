import React from 'react'

import axios from 'axios'



export default class App extends React.Component {
  
  state = {
    pokemons: [],
    picture: "",
    habilidades: []
  }

  componentDidMount() {
    this.getPokemons()
  }

  getPokemons = async () => {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=351&offset=0"
    )

    console.log("results",response.data.results )
    this.setState({ pokemons: response.data.results})
  }

  getPictures = async (event) => {
    console.log("value que chegou", event)


    const url = event.target.value
    const response = await axios.get(`${url}`)

    console.log("response.data",response.data.abilities)
    this.setState({ habilidades: response.data.abilities})
  

    
    this.setState({ picture: response.data.sprites.front_default })
  }
  

  // getAbility = async (event) => {
  //   console.log("key que chegou", event.target.key)
  //   const url = `https://pokeapi.co/api/v2/ability/${event.target.key}/`
  //   const response = await axios.get(url)

  //   console.log( "aquin meu teste boniotao", response.data)
  //   // this.setState({ habilidade: })
  // }

  render() {
    const pokemonList = this.state.pokemons.map((poke) => {
      return (
        
        <option key={poke.name} value={poke.url}>
          {poke.name}
        </option>
      )
    })
    console.log("lis pokemons", pokemonList.name)
    console.log("habilidades", this.state.habilidades[0])


    const habilidadesList = this.state.habilidades.map((habilidade) => {
      return (
        <p > 
          {habilidade.ability.name}
        </p>
      )
    })
    return(
      <div>
        <h2> Vamos conhecer os Pokemons?</h2>
        <select onChange={this.getPictures} >
          <option>Selecione um pokemon </option>
          {pokemonList}
        </select>
        {this.state.picture && (
          <img src={this.state.picture} alt='foto do pokemon' />
        )} 
        <p> Habilidades: {habilidadesList} </p>
      </div>
    )
  }
  
   
    
}


