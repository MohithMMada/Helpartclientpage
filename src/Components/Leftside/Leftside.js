import React from 'react';
import '../Leftside/Leftside.css'
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa";
import { MdFace, MdSubscriptions, MdOutlinePayment, MdFactCheck } from "react-icons/md";
import { IoMdLock, IoIosNotifications } from "react-icons/io";

function Leftside() {
  return (
    <div className='leftCard'>
      <Link to="/appoi" style={{textDecoration:"none"}}><button>
        <MdFactCheck color='blue' size="28px" />
        <div className='buttonText'>
          <p className='buttonTextOne'>My Appointment</p>
          <p className='buttonTextTwo'>Show your saved appointment</p>
        </div>
        <FaAngleRight color='rgb(85, 85, 85)' size="20px"/>
      </button></Link>
      <Link to="/client" style={{textDecoration:"none"}}><button>
        <MdFace color='blue' size="28px" />
        <div className='buttonText'>
          <p className='buttonTextOne'>My Clients</p>
          <p className='buttonTextTwo'>Show your clients</p>
        </div>
        <FaAngleRight color='rgb(85, 85, 85)' size="20px"/>
      </button></Link>
      <button>
        <MdSubscriptions color='blue' size="28px" />
        <div className='buttonText'>
          <p className='buttonTextOne'>Subscription Setting</p>
          <p className='buttonTextTwo'>Manage your price</p>
        </div>
        <FaAngleRight color='rgb(85, 85, 85)' size="20px"/>
      </button>
      <button>
        <IoMdLock color='blue' size="28px" />
        <div className='buttonText'>
          <p className='buttonTextOne'>Security Access</p>
          <p className='buttonTextTwo'>Show your saved appointment</p>
        </div>
        <FaAngleRight color='rgb(85, 85, 85)' size="20px"/>
      </button>
      <button>
        <IoIosNotifications color='blue' size="28px" />
        <div className='buttonText'>
          <p className='buttonTextOne'>Notification Settings</p>
          <p className='buttonTextTwo'>Change your notification settings</p>
        </div>
        <FaAngleRight color='rgb(85, 85, 85)' size="20px"/>
      </button>
      <button>
        <MdOutlinePayment color='blue' size="28px" />
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