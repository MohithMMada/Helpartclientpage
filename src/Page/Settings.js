import React from 'react';
import Navside from '../Components/Navside/Navside';
import Leftside from '../Components/Leftside/Leftside';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Myclient from '../Components/Rightside/Myclient';

function Settings() {
  return (
    <>
        <div>
          <Navside/>
        </div>
        <BrowserRouter>
          <div className='hero' style={{display:"flex"}}>
            <Leftside/>
            <Routes>
              {/* <Route path='/appoi'/> */}
              <Route path='/client' element= {<Myclient/>}/>
              {/* <Route path='/subsc'/> */}
              {/* <Route path='/secur'/> */}
              {/* <Route path='/notif'/> */}
              {/* <Route path='/pay'/> */}
            </Routes>
          </div>
        </BrowserRouter>
    </>  
  )
}

export default Settings