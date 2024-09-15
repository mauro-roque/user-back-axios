const objUser = {
  nomePessoa: `roque`,
  idadePessoa: `10`
}

class PostNewUser{
  insertUser = async () => {
    return await fetch(`http://localhost:8080/cadastro`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(objUser)
    })
    .then((response) => {return response.json()})
    .then((data) => {return data})
  }
}

const post = new PostNewUser()
post.insertUser().then((e) => {e})