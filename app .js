import React from "react";
import ReactDOM from "react-dom/client";

// Create a heading element
const Heading =({hello})=> (
    <div className="baby">
    jello+{hello}
     </div>);
     

// Render the heading into the root element
const root = ReactDOM.createRoot(document.getElementById("form"));
const value=document.getElementById("form");
root.render(<Heading hello="hie"/>)