const express = require("express")
const router = express.Router()
const { User } = require("../DAO/bdPessoa")

router.post("/cadastro", async(req, res) => {
  let user = req.body
  User.funcPessoaInsert(user.nomePessoa, user.idadePessoa)
})

module.exports = router