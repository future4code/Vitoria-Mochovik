import React, { useState} from  'react';
import Initial from './Pages/Initial/Initial'
import Matches from './Pages/Matches/Matches'
import axios from  'axios';


const ChangePages = () => {
  const [page, setPage] = useState("Initial")
  const [atualizaLista, setAtualizaLista] = useState(false)

  const changePage = () => {
    switch (page) {
      case 'Initial':
        return <Initial setPage={setPage} atualizaLista={atualizaLista} />
      case 'Matches':
       return <Matches setPage={setPage} atualizaLista={atualizaLista} />
      default:
        return <p> Página não encontrada!</p>
    }
  }

  const clearMatches = () => {
    if(window.confirm("Tem certeza que deseja limpar? Essa operação NÃO pode ser desfeita ")){
      const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vitoriaMolina/clear`
      axios.put(url)
      .then((res) => {
        alert("Matches apagados com sucesso!")
        setAtualizaLista(!atualizaLista)
      })
      .catch((err) => {
        alert(err.message)
      })
    }
    
  }
  return (
    <div> 
      {changePage()}
      <button onClick={clearMatches}> Limpar swipes e matches</button>
    </div>
  )

}

export default ChangePages;
