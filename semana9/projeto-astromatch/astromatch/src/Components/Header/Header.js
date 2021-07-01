import React, {useEffect, useState} from  'react';


const Header = ({page, setPage}) =>{
    return(
        <div> 
            {
                page==='Matches' &&
                <button onClick={()=>setPage("Initial")}>Initial</button>
            }
            <p> header</p>
            {
                page==='Initial' &&
                <button onClick={()=>setPage('Matches')}>Matches </button>
            }
        </div>
    )
}

export default Header