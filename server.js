const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.set("view engine", "ejs");
app.get("/", (req, res) => {
	res.sendFile(__dirname + "/public/index.html");
});

app.post("/burp-test", (req, res) => {
	console.log("request done");
	res.status(200);
	res.send({data: "bla bla bla", id: "021"});
	console.log(req.body);
});

app.get("/login", (req, res) => {

});

app.listen(80, () => {
	console.log("server running");
});
