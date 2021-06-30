import React, {useEffect, useState} from  'react';
import axios from  'axios';
import Initial from './Pages/Initial/Initial.js'

const App = () => {
  const [page, setPage] = useState("initial")

  const changePage = () => {
    switch (page) {
      case 'initial':
        return <Initial />
    }
  }

  return (
    <div> 
      {changePage()}
      <p>alo</p>
    </div>
  )

}

export default App;
