import * as React from "react";
import { Button, Intent, Spinner } from "@blueprintjs/core";

function Navbar() { 
    return (
        <>
            <h1> test </h1>
            <Spinner intent="success"> </Spinner>
            <Intent> </Intent>
            <Button intent="success" text="test button" className="Button"> test </Button>
        </>
    )
}

export default Navbar;