import express from "express";
import data from "./data.js";

const app = express();

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log("Server is running at port 5000");
});

app.get("/", (req, res) => {
	res.send("Server is running");
});

app.get("/api/products", (req, res) => {
	res.send(data.products);
});
