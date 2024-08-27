

import React from "react";
import ReactDOM from "react-dom/client";



// Components Composition
const Title = () => <h1>Namaste React</h1>


const Headingcomponent = () => 
     (<div id='container' id='heading'>
        {Title()} 
        <Title></Title>
        <Title/>

        <h1>Namste  React Functional Component</h1>
     </div>);

console.log(<Headingcomponent/>)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Headingcomponent/>);