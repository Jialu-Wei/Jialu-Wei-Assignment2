import React, { useState, useContext } from "react";
import { GridContext } from "../context/GridContext";  
import "../styles/Cell.css"; 

// Switch color when clicked (white ↔ black)
// Notify GridContext to update count

function Cell() {
    const [isBlack, setIsBlack] = useState(false);  
    const { toggleCell } = useContext(GridContext);  

    function handleClick() {
        setIsBlack(function (prevIsBlack) {  
            if (prevIsBlack) {
                return false;  //white
            } else {
                return true;   // black
            }
        });

        toggleCell(!isBlack);  
    }

    let cellClass = "cell white";  // to white
    if (isBlack) {
        cellClass = "cell black";  //to black
    }

    return <div className={cellClass} onClick={handleClick}></div>;
}

export default Cell;
