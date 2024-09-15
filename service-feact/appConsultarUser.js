class ConsultarPessoa{
  consultarTodos = async () => {
    return await fetch(`http://localhost:8080/users`)
    .then((response) => {return response.json()})
    .then((data) => {return data}) 
  }
}
const consulta = new ConsultarPessoa()
const users = consulta.consultarTodos()
.then((e) => {
  let nomesUser = []
  e.forEach(element => {
    nomesUser.push(element.nomePessoa);
  });
  return nomesUser;
})

users.then((e) => {
  document.getElementById("teste").innerText = e
})