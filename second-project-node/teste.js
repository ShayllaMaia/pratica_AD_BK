/*function erro(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}


const APIUrl = 'http://jsonplaceholder.typicode.com/users';
a = document.getElementById('testeapp')

fetch(APIUrl)
  .then(erro)
  .then(response => response.json())
  .then(users => {
    const lista = user.map(user => {
        user.name
        user.email
    })


    users.forEach(user => {
      a.innerHTML = (`Nome: ${user.name}, Email: ${user.email}`);
      console.log(a)
    });
  })
.catch(error => {
    console.log('Aconteceu um erro: ', error);
  });
*/

fetch('http://jsonplaceholder.typicode.com/users') // Objeto do JavaScript (ES6) que funciona como uma Promise e trabalha requisições e respostas HTTP.
    .then((resp) => resp.json()) // Recebendo os dados e convertendo para um JSON.
    .then(function(dado){ // Recebendo os dados em um Array.
        return dado.map(function(item){ // Conseguimos varrer o array com o método map.
            const li = document.createElement('li') // Criando um elemento li.
            li.innerHTML = `Nome: ${item.name} | Sobrenome: ${item.username}` // Inserindo o elemento no HTML.
            document.getElementById('nomes').appendChild(li) // Inserindo um nó do tipo li na estrutura do DOM.
        })
    })
    .catch((error) => {
        console.log('Algo não deu certo: ' + error)
    })