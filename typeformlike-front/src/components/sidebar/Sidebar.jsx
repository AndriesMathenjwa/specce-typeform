import React from 'react'
import "./sidebar.css"
import { FaSearch, FaCaretDown, FaUser } from 'react-icons/fa';
import { CiAlignCenterV } from "react-icons/ci";
import { CiVoicemail } from "react-icons/ci";


const Sidebar = () => {
  return (
    <div className="sideContainer">
        
    <div className="sideSearchBox">
      <FaSearch className="searchIcon" />
      <input className="input"type="text" placeholder="Find workspace or typeform" />
    </div>

    <div className="SideTopInfo">

    <div className="Item">
    <FaCaretDown />
    <FaUser className="persicon" />
    <p>PRIVATE</p>
    </div>

       <div className="Item">
          <button className="fbtn">+</button> 
      </div>  
    </div>

    <div className="wrkBox">
      <input className="input"type="text" placeholder="My workspace" />
    </div>

    <div className="botomInfo">
    <div className="bitems">
         <p className="pIn">Andries mathenjwa account</p>
         <p>Response Collected</p>
         <p>1/10</p>
         <p>Reset on feb 10</p>
         <p>Increase response limit</p>
      <div className="Item">
         <CiAlignCenterV   className="icon" />
         <p className="pIn">Apps & Intergrations</p>
    </div>
    <div className="Item">
         <CiVoicemail className="icon" />
         <p className="pIn">Brand Kit</p>
    </div>

    </div>
    </div>
    </div>
  )
}

export default Sidebar