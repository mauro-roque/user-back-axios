class User{
  constructor(idPessoa, nomePessoa, idadePessoa){
    this.idPessoa = idPessoa;
    this.nomePessoa = nomePessoa;
    this.idadePessoa = idadePessoa;
  }
  static arrayPessoaBd = [];
  static funcPessoaInsert = (nomePessoa, idadePessoa) => {
    let id = User.arrayPessoaBd.length + 1;
    let user = new User(id, nomePessoa, idadePessoa);
    User.arrayPessoaBd.push(user);
  }
}

//insert:
User.funcPessoaInsert("user1", 20)
User.funcPessoaInsert("user2", 40)
User.funcPessoaInsert("user3", 34)
User.funcPessoaInsert("user4", 21)
User.funcPessoaInsert("user5", 54)

//print:
//console.log(User.arrayPessoaBd)

//exports:
module.exports = {User}