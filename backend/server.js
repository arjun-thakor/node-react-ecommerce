const express = require("express");
const userRouter = require("./routes/users");
const db = require("./config/database");

//Database coneection
db.authenticate()
	.then(() => console.log("Database connected..."))
	.catch((err) => console.error("Error: " + err));

const app = express();

app.use(express.json());
app.use(userRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log("Server is running at port 5000");
});

app.get("/", (req, res) => {
	res.send("Index");
});