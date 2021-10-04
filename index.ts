import express from 'express';
// const { response } = require("express");
const app = express();
const port =3333;

app.use(express.json());


app.listen(port, ()=> {
  console.log("Running application in http://localhost:"+port);
});

app.get("/", (request, response) => {
  return response.json({
    helloWord: "Hello World ",
    App: "NodeJs Apps"
  });
});

app.post("/post", (req, res) => {
  res.send("POST");
});

app.delete("/delete", (req, res) => {
  res.send("DELETE");
});

app.put("/put", (req, res) => {
  res.send("PUT");
});