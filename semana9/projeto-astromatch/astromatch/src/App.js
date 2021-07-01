import React, {useEffect, useState} from  'react';
import axios from  'axios';
import Initial from './Pages/Initial/Initial.js'
import Matches from './Pages/Matches/Matches.js'
import getProfileChoose from './Requests/Requests.js';
import changePageMatches from './Pages/ChangePage.js';

const App = () => {
  const [page, setPage] = useState("initial")

  const changePage = () => {
    switch (page) {
      case 'initial':
        return <Initial pageSet={pageSet}/>
      case 'matches':
        return <Matches />
    }
  }

  const pageSet = () => {
    console.log("chegeuiiiiiii")
    
      const result =  changePageMatches()
      setPage(result)
    

  }

 
 
  return (
    <div> 
      {changePage()}
    </div>
  )

}

export default App;
