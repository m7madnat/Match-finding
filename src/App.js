import React from "react";
import Picture from "./components/Picture";
import CustomButton from "./components/CustomButton";
import { useState } from "react";
import './components/style.css';

function App(){
  const [imgIndex, setImgIndex] = useState(1);
  const [yes, setYes] = useState(0);
  const [no, setNo] = useState(0);
  const [msg, setMsg] = useState("");
  const [clicked, setClicked] = useState(false);


  const handleClick = (classId) => {    
    if (imgIndex < 5) {
      setSateFlipImage(classId);
      setImgIndex(imgIndex + 1);
    } else if (imgIndex === 5) {  
      setStateEndMsg(classId);   
      setClicked(true);   
    }    
  };

  const setSateFlipImage = (classId) => {   
    setImgIndex(imgIndex + 1);
    if (classId === "yes") {
      setYes(yes + 1);
    } else if (classId === "no") {
      setNo(no + 1);
    } 
  };

  const setStateEndMsg = (classId) => {        
    if (classId === "yes") {
      setYes(yes + 1);
    } else if (classId === "no") {
      setNo(no + 1);
    }    
    if(yes > no){
      setMsg("You are a true football fan!");
    }
    else {
      setMsg("You are not a true football fan!");
    }

  };

  return (
    <div className="mainContainer">
      <div className="counters">
        <span>👎{no}</span>
        <span>👍{yes}</span>
      </div>
        <Picture index={imgIndex} />    
      <div className="yesNoBtns">
      <CustomButton
          handleClick={handleClick}
          disabled={clicked}          
          text="❌"
          className="no"
        />
        <CustomButton
          handleClick={handleClick}
          disabled={clicked}          
          text="✔"
          className="yes"
        />
        </div>
        {clicked && <div className="finalMsg">{msg}</div>}
    </div>
  );   
}

export default App;