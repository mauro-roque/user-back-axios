const axios = require("axios")
const objUser = {
  nomePessoa: `roquinho`,
  idadePessoa: `30`
}


async function postNewUser() {
  const response = await axios.post(`http://localhost:8080/cadastro`, objUser, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return response
}

postNewUser().then((e) => {console.log(`dado inserido`)})