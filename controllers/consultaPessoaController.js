const express = require("express");
const router = express.Router()
const { User } = require("../DAO/bdPessoa");

router.get("/users", async(req, res) => {
  try {
    res.status(200).send(User.arrayPessoaBd)
  } catch (error) {
    console.error(`Erro`)
  }
})

module.exports = router