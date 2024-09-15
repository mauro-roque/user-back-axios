const axios = require("axios")

async function recupDataUser() {
  return await axios.get(`http://localhost:8080/users`)
}

recupDataUser().then((data) => {console.log(data.data)})