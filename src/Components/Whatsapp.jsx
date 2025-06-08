import React from 'react'
import '../Styles/Whats.css'
import { IoLogoWhatsapp } from "react-icons/io";
function Whatsapp() {
  return (
    <>
      

      <div className="icon-container">
        <div className="whatsapp-wave"></div>
        <a href="https://wa.me/8797879750?texr=Welcome to Soulfit" target='_blank'><IoLogoWhatsapp className='wt' /></a>
    </div>
    </>
  )
}

export default Whatsapp
