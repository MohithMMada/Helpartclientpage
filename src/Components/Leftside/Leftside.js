import React from 'react';
import '../Leftside/Leftside.css'
import { Link } from 'react-router-dom';
import { SlCalender } from "react-icons/sl";
import { FaAngleRight } from "react-icons/fa";

function Leftside() {
  return (
    <div className='leftCard'>
      <Link to="/appoi" style={{textDecoration:"none"}}><button>
        <SlCalender color='blue' size="25px" />
        <div className='buttonText'>
          <p className='buttonTextOne'>My Appointment</p>
          <p className='buttonTextTwo'>Show your saved appointment</p>
        </div>
        <FaAngleRight color='rgb(85, 85, 85)' size="20px"/>
      </button></Link>
      <Link to="/client" style={{textDecoration:"none"}}><button>
        <SlCalender color='blue' size="25px" />
        <div className='buttonText'>
          <p className='buttonTextOne'>My Clients</p>
          <p className='buttonTextTwo'>Show your clients</p>
        </div>
        <FaAngleRight color='rgb(85, 85, 85)' size="20px"/>
      </button></Link>
      <button>
        <SlCalender color='blue' size="25px" />
        <div className='buttonText'>
          <p className='buttonTextOne'>Subscription Setting</p>
          <p className='buttonTextTwo'>Manage your price</p>
        </div>
        <FaAngleRight color='rgb(85, 85, 85)' size="20px"/>
      </button>
      <button>
        <SlCalender color='blue' size="25px" />
        <div className='buttonText'>
          <p className='buttonTextOne'>Security Access</p>
          <p className='buttonTextTwo'>Show your saved appointment</p>
        </div>
        <FaAngleRight color='rgb(85, 85, 85)' size="20px"/>
      </button>
      <button>
        <SlCalender color='blue' size="25px" />
        <div className='buttonText'>
          <p className='buttonTextOne'>Notification Settings</p>
          <p className='buttonTextTwo'>Change your notification settings</p>
        </div>
        <FaAngleRight color='rgb(85, 85, 85)' size="20px"/>
      </button>
      <button>
        <SlCalender color='blue' size="25px" />
        <div className='buttonText'>
          <p className='buttonTextOne'>Payment Settings</p>
          <p className='buttonTextTwo'>Change your payment settings</p>
        </div>
        <FaAngleRight color='rgb(85, 85, 85)' size="20px"/>
      </button>
      <button className='btn'>Logout</button>
    </div>
  )
}

export default Leftside