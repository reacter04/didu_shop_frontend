import React, { useContext } from "react";
import "./Timer.css"
import { ShopContext } from "../../../Context/ShopContext";

function Timer() {

    const {totalSeconds} = useContext(ShopContext)

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return (
    <div className="timer">⏳  
       {hours < 10 ? "0" + hours : hours}: 
      {minutes < 10 ? "0" + minutes : minutes}:
      {seconds < 10 ? "0" + seconds : seconds}
    </div>
  );
}

export default Timer;
