import React from 'react'
import "./main.css"
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Workspace from '../../components/workspace/Workspace'

const Main = () => {
  return (
    <div  className="conainer">
      <Navbar/>
      <div  className="infoConainer">
      <div className="side">
        <Sidebar />
      </div>
      <div className="workspace">
        <Workspace />
      </div>
      </div>
    </div>
  )
}

export default Main