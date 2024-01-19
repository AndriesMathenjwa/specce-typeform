import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navContainer">
    <div className="userInfo">
    <p className="initia">A</p>
     <p className="nam">Andries mathenjwa</p> 
    </div>
    <div className="actions">
      <p className="inf">Create</p>
      <p className="inf">Connect</p>
      <p className="inf">Share</p>
      <p className="inf">Results</p>
    </div>
    <div className="PriceInfo">
      <button className="navbtn">View plans</button>
      <p className="in">A</p>
    </div>
  </div>
  )
}

export default Navbar