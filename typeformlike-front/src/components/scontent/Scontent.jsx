import React from 'react'
import "./scontent.css"

const Scontent = () => {
  return (
    <div className="sccontainer">

    <div className="topInfo">

    <div className="Item">
    <p>content</p>
    </div>

       <div className="Item">
          <button className="fbtn">+</button> 
      </div>  
    </div>
    <div className="quez"><button className="btn">/</button></div>

    <div className="botomInfo">
    <div className="topInfo">

    <div className="Item">
    <p>Endings</p>
    </div>

       <div className="Item">
          <button className="fbtn">+</button> 
      </div>  
    </div>

    </div>
    </div>
  )
}

export default Scontent