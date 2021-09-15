import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import App from "./App";
import Breadcrumbs from "../src/components/Breadcrums/Bread.js";
import Test from "../src/components/test.js";
import Navbar from "../src/components/NavBar/navbar.js"

ReactDOM.render(
	<React.StrictMode>
		<Breadcrumbs />
		<Test />
		<App />
		<Navbar />
	</React.StrictMode>,
	document.getElementById("root")
);
