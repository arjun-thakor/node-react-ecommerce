import * as React from "react";
import { Button, Intent, Spinner } from "@blueprintjs/core";
 
// using JSX:
const mySpinner = <Spinner intent={Intent.PRIMARY} />;
 
// use React.createElement if you're not using JSX.
const myButton = React.createElement(Button, { intent: Intent.SUCCESS }, "button content")

function Test() { 
    <div className="App">
        <myButton> abc </myButton>
        <mySpinner />
    </div>
    return(
        'Hello World'
    )
}

export default Test;
