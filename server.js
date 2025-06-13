const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();
const {encrypt, decrypt} = require("./cryptography/crypt");
const fs = require("fs");

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

app.post("/login", (req,res) =>{
	let users = JSON.parse(fs.readFileSync("./data/users.json"));
	users.forEach(user => {
		if(user.username == req.body.username){
			res.send(1);
			return;
		} 
	});
	res.send(0);
});

app.get("/login", (req, res) => {

});

app.listen(80, () => {
	console.log(encrypt("hello", 3));
	console.log(decrypt(encrypt("hello", 3), 3));
});
