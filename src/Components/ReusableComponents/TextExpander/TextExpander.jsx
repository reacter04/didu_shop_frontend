import { useState } from 'react';
import React from 'react';

function TextExpander({
    children,
    className,
    collapsedNumWords = 20,
    expandButtonText = "Arata mai mult",
    collapseButtonText = " Ascunde",
    buttonColor = "red",
    expanded = false
  }) {
    const [showAll, setShowAll] = useState(expanded);
    
  
    const text = children.split(" ").slice(0, collapsedNumWords).join(" ");
  
    function handlerShowAll (){
      setShowAll(!showAll)
    }
  
    return (
      <div className={className}>
        {showAll ? children : `${text} ... `}
          <span onClick={handlerShowAll} style={{ color: buttonColor, cursor: "pointer"}} role="button">{showAll ? collapseButtonText : expandButtonText }</span>
       
      </div>
    );
  }

export default TextExpander
