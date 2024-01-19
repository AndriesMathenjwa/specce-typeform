import React from 'react'
import { FaUserPlus } from "react-icons/fa6";
import "./workspace.css"
import { useNavigate } from "react-router-dom";
import useFetch from '../../hooks/useFetch';

const Workspace = () => {
    const {data, loading, error} = useFetch("/questions")
    console.log(data)

    const navigate = useNavigate(); 

  const handleCreateFormClick = () => {
    navigate("/content");
  };
  return (
    <div className="workspaceContainer">
      <div className="items">
      <p className="title">My Workspace</p>
       <FaUserPlus className="icon" /> 
       <p>Share ....</p>
      </div>
      <div className="itemsfo">
      <button className="workspaceBtn" onClick={handleCreateFormClick}>+ Create new form</button>
      </div>
      <hr />
    </div>
  )
}

export default Workspace