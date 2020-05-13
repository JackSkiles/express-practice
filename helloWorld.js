const express = require("express");
const app = express();
const port = 8000;


app.get("/", (req, res)=> res.send("Hello World!"));

app.get("/cat", (req, res)=> res.send("Meow"));

app.get("/dog", (req, res)=> res.send("Woof"));

app.get("/cats_and_dogs", (req, res)=> res.send("Living together."));

app.get("/greet/Jack", (req, res)=> res.send("Hello Jack!"));

app.get("/greet/Jamison", (req, res)=> res.send("I want those mallaysia contracts."));

app.listen(port, ()=>{
    console.log(`listening at http://localhost:${port}`);
})