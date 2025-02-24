import React, { useContext } from "react";
import Cell from "./Cell";  
import { GridContext } from "../context/GridContext";  
import "../styles/Grid.css";

function Grid() {
    const { count } = useContext(GridContext);

    return (
        <div className="grid-container">
            <h2>Counts: {count}</h2>  
            <div className="grid">
                <Cell />
                <Cell />
                <Cell />
                <Cell />
            </div>
        </div>
    );
}

export default Grid;
