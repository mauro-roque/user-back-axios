const express = require("express");
const cors = require("cors")
const app = express();
const port = 8080;

app.listen(port, () => {console.log(`localhost:${port}`)})
app.get("/", async(req, res) => {
  res.status(200).json({menssage: `OK`})
})

//cors
app.use(cors())

//Conf. para aceitar passar dados pelo body da request...
app.use(express.json());

//Outras rotas:
const consutaPessoaController = require("./consultaPessoaController")
app.use(consutaPessoaController)

const postNewUser = require("./postNewUser")
app.use(postNewUser);