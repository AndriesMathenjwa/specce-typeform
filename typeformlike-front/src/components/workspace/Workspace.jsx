import React, { useState, useEffect } from "react";
import { FaUserPlus } from "react-icons/fa6";
import "./workspace.css";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { BsGrid1X2 } from "react-icons/bs";

const Workspace = () => {
  const { data, loading, error } = useFetch("/questions");
  const navigate = useNavigate();

  const [uniqueFormNames, setUniqueFormNames] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
      const formNamesSet = new Set();

      data.forEach((formData) => {
        formNamesSet.add(formData.formName);
      });

      const uniqueNamesArray = Array.from(formNamesSet);
      setUniqueFormNames(uniqueNamesArray);
    }
  }, [data]);

  const handleCreateFormClick = () => {
    navigate("/content");
  };

  const handleCardClick = (formName) => {
    navigate(`/quiz/${encodeURIComponent(formName)}`);
  };

  return (
    <div className="workspaceContainer">
      <div className="items">
        <p className="title">My Workspace</p>
        <FaUserPlus className="icon" />
        <p>Share ....</p>
      </div>
      <div className="itemsfo">
        <button className="workspaceBtn" onClick={handleCreateFormClick}>
          + Create new form
        </button>
        <select className="dateOptions">
          <option value="option1">Date created</option>
          <option value="option2">Last day updated</option>
          <option value="option3">Alphabetical</option>
        </select>
      </div>
      <hr />
      <div className="cardContainer">
        {uniqueFormNames.map((formName, index) => (
          <div
            key={index}
            className="card"
            onClick={() => handleCardClick(formName)}
          >
            <p className="formName">{formName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workspace;
