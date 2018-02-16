const express  = require("express");
const fs       = require("fs");
var bodyParser = require("body-parser");
const app      = express();

const defaultErrors = {
  name: null,
  email: null,
  terraform_planets: null,
  terraform_experience: null
};

app.set("port", process.env.PORT || 3001);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if(process.env.NODE_ENV==="production") {
  app.use(express.static("client/build"))
};

app.post("/api/astronauts", (req, res) => {
  let astronaut = req.body.astronaut;
  console.log("POST /api/astronauts");
  console.log("PARAMS:");
  console.log(astronaut);
  astronaut.id = 1;
  astronaut.errors = defaultErrors;
  res.json(astronaut);
})

app.listen(app.get("port"), () => {
  console.log(`Find the server at http://localhost:${app.get("port")}`)
})
