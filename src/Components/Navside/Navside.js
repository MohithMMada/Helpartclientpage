import React from 'react';
import '../Navside/Navside.css';
import { RiChat1Line } from "react-icons/ri";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import { GrInstallOption } from "react-icons/gr";
import icon from "../Navside/icon.jpg";

function Navside() {
  return (
    <div className='navContainer'>
      <div className='navLeft'>
        <RiChat1Line color="blue" size="30px"/>
        <p className='navLeftText'>Helpert</p>
      </div>
      <div className='navCentre'>
        <FaArrowLeftLong color="rgb(85, 85, 85)" size="20px" />
        <p className='navCentreText'>Settings</p>
      </div>
      <div className='navRight'>
        <div className='navRightOne'>
          <img src={icon} alt='icon' height="50vh"/>
          <p className='navRightText'>Yondu</p>
        </div>
        <div className='navRightTwo'>
          <IoIosNotifications color="rgb(85, 85, 85)" size="25px"/>
        </div>
        <div className='navRightThree'>
          <GrInstallOption color="rgb(85, 85, 85)" size="25px"/>
        </div>
      </div>
    </div>
  )
}

export default Navside