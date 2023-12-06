import React from 'react'
import '../Rightside/Myclient.css'
import profile1 from '../Rightside/Profile1.png'
import profile2 from '../Rightside/Profile2.png'


function Myclient() {
  return (
    <div className='clientCard'>
      <p className='mcText'>My Clients</p>
      <div className='cccontainer'>
        <img src={profile2} alt='profilePic' height="50px"/>
        <div className='cct'>
          <p className='cctOne'>Vasi Musks</p>
          <p className='cctTwo'>USA</p>
        </div>
      </div>
      <div className='cccontainer'>
        <img src={profile2} alt='profilePic' height="50px"/>
        <div className='cct'>
          <p className='cctOne'>Vasi Musks</p>
          <p className='cctTwo'>Italy</p>
        </div>
      </div>
      <div className='cccontainer'>
        <img src={profile1} alt='profilePic' height="50px"/>
        <div className='cct'>
          <p className='cctOne'>Vasi Musks</p>
          <p className='cctTwo'>USA</p>
        </div>
      </div>
      <div className='cccontainer'>
        <img src={profile1} alt='profilePic' height="50px"/>
        <div className='cct'>
          <p className='cctOne'>Vasi Musks</p>
          <p className='cctTwo'>France</p>
        </div>
      </div>
      <div className='cccontainer'>
        <img src={profile1} alt='profilePic' height="50px"/>
        <div className='cct'>
          <p className='cctOne'>Vasi Musks</p>
          <p className='cctTwo'>UK</p>
        </div>
      </div>
    </div>
  )
}

export default Myclient