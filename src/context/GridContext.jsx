import React, { createContext, useState } from "react";

// Creat Context
const GridContext = createContext();

// GridProvider to handle all the data
function GridProvider({ children }) {
    const [count, setCount] = useState(0);

    function toggleCell(isBlack) {
        setCount(function (prevCount) {
            if (isBlack) {
                return prevCount + 1;  // if cell black,count +1
            } else {
                return prevCount - 1;  // if cell white,count -1
            }
        });
    }

    return (
        <GridContext.Provider value={{ count, toggleCell }}>
            {children}
        </GridContext.Provider>
    );
}

export { GridContext, GridProvider };
