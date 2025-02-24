import React from "react";
import Grid from "./components/Grid";  
import { GridProvider } from "./context/GridContext";  
import "./styles/App.css";  

function App() {
    return (
        <GridProvider>
            <div className="app-container">
                <h1>React and JavaScript</h1>
                <Grid />
            </div>
              
        </GridProvider>
    );
}

export default App;
