import React, { useState } from 'react'
import "./rightcontent.css"
import { IoMdSettings } from "react-icons/io";


const Rightcontent = () => {
    const [isChecked, setChecked] = useState(false);
  
    const handleCheckboxChange = () => {
      setChecked(!isChecked);
    };
  
    return (
      <div className="rightContainer">
        <div className="rtopInfo">
          <div className="rtopItems">
            <p>Question</p>
            <p>Design</p>
            <p>Logic</p>
            <IoMdSettings className="icon" />
          </div>
          <div className="span"><span >Type</span></div>
          
        </div>
        <div className="settingsContainer">
          <span>Settings</span>
          <div className="settingslis">
          <p>Required</p>
          <input
            type="checkbox"
            id="settingsCheckbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          </div>
          <div className="settingslis">
          <p>Randomize</p> 
          <input
            type="checkbox"
            id="settingsCheckbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          </div>
          <div className="settingslis">
           <p>Multiple selection</p> 
          <input
            type="checkbox"
            id="settingsCheckbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          </div>
          <div className="settingslis">
          <p>"Other" option</p> 
          <input
            type="checkbox"
            id="settingsCheckbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          </div>
          <div className="settingslis">
         <p>Vertical alignment</p> 
          <input
            type="checkbox"
            id="settingsCheckbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          </div>
        </div>
      </div>
    );
  };
  
  export default Rightcontent;
  