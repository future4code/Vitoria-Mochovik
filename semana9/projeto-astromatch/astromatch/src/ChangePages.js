import React, {useEffect, useState} from  'react';
import Initial from './Pages/Initial/Initial'
import Matches from './Pages/Matches/Matches'
import axios from  'axios';


const ChangePages = () => {
  const [page, setPage] = useState("Initial")

  const changePage = () => {
    switch (page) {
      case 'Initial':
        return <Initial setPage={setPage} />
      case 'Matches':
       return <Matches setPage={setPage} />
    }
  }

  const clearMatches = () => {
    const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vitoriaMolina/clear`
    axios.put(url)
    .then((res) => {
      alert("Matches apagados com sucesso!")
    })
    .catch((err) => {
      alert(err.message)
    })
  }
  return (
    <div> 
      {changePage()}
      <button onClick={clearMatches}> Limpar swipes e matches</button>
    </div>
  )

}

export default ChangePages;
