import React from 'react'
import "./content.css"
import Navbar from '../../components/navbar/Navbar'
import Scontent from '../../components/scontent/Scontent'
import Newcontent from '../../components/newcontent/Newcontent'
import Rightcontent from '../../components/rightcontent/Rightcontent'

const Content = () => {
  return (
    <div  className="conainer">
    <Navbar />
    <div  className="infoConainer">
    <div  className="side">
    <Scontent />
    </div>

    <div  className="content">
     <Newcontent /> 
    </div>

    <div  className="rside">
     <Rightcontent /> 
    </div>
    
      
    </div>
  </div>
  )
}

export default Content