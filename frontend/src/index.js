import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Breadcrumbs from "../src/components/Breadcrums/Bread.js";
import Test from "../src/components/test.js";


ReactDOM.render(
	<React.StrictMode>
		<Breadcrumbs />
		<Test />
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
