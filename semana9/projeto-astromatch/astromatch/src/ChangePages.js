import React, {useEffect, useState} from  'react';
import Initial from './Pages/Initial/Initial'
import Matches from './Pages/Matches/Matches'

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

  return (
    <div> 
      {changePage()}
    </div>
  )

}

export default ChangePages;
