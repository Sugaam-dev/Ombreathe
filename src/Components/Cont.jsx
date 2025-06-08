import React from 'react'
import Contact from './Contact'
import Ratings from './Ratings'

import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

function Cont() {
  return (
    <div>
      <div className="cont" style={{textAlign:"center",display:"flex",flexDirection:"column"}}>
        <h1 style={{fontSize:"50px",fontFamily:"Caudex, serif"}}>Contact</h1>
        <div className="contwt">
       
        <a href="" style={{display:"flex",alignItems:"center",textAlign:"center",textDecoration:"none",fontSize:"20px"}}><span style={{fontSize:"30px",marginRight:"10px"}}> <IoLogoWhatsapp style={{color:"green"}} /></span> +91 7829997007</a>
        </div>
        <div className="contwt">
       
       <a href="" style={{display:"flex",alignItems:"center",textAlign:"center",textDecoration:"none",fontSize:"20px"}}><span style={{fontSize:"30px",marginRight:"10px"}}><MdEmail /> </span>yogalayaa@gmail.com</a>
       </div>
      </div>
      <Contact/>
      <Ratings/>
    </div>
  )
}

export default Cont
