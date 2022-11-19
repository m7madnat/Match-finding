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


  const handleClick = (className) => {    
    if (imgIndex < 11) {
      setSateFlipImage(className);
      setImgIndex(imgIndex + 1);
    } else  {        
      setClicked(true);         
      setStateEndMsg(className);   
    }        
  };  

  const setSateFlipImage = (className) => {     
    setImgIndex(imgIndex + 1);
    if (className === "yes") {    
      setYes(yes + 1);
    } else if (className === "no") {    
      setNo(no + 1);
    } 
  };

  const setStateEndMsg = (className) => {        
    if (className === "yes") {
      setYes(yes + 1);
    } else if (className === "no") {
      setNo(no + 1);
    }
    if ((yes === 5 && className === "yes") || yes > no) {
      setMsg("You are a true football fan!");
    }
    else if ((no === 5 && className === "no") || no > yes) {
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
          text="❌"
          className="no"
          handleClick={handleClick}
          disabled={clicked}   
        />
        <CustomButton       
          text="✔"
          className="yes"          
          handleClick={handleClick}
          disabled={clicked}   
        />
        </div>
        {clicked && <div className="finalMsg">{msg}</div>}
    </div>
  );   
}

export default App;