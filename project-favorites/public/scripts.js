const ul = document.querySelector('ul')
const input = document.querySelector('input')
const form = document.querySelector('form')


// Não se preocupem com esse pedaço de código comentado! Vamos descomentá-lo quando tivermos acabado de construir a API.

// Função que carrega o conteúdo da API.
async function load() {
    // fetch está como await para evitar que entre num esquema de promisse e só devolva o conteúdo após a iteração qua acontece em seguida.
    const res = await fetch('http://localhost:3000/')
        .then(data => data.json())
    // Iterando no vetor com o conteúdo (JSON) que está vindo da API e adicionando-os no frontend.
    res.urls.map(({name, url}) => addElement({name, url}))
}

load()

function addElement({ name, url }) {
    const li = document.createElement('li');
    li.innerHTML = `
        <a href="${url}" target="_blank">${name}</a>
        <button id="remover">Remover</button>
    `;

    li.querySelector('button').addEventListener('click', () => {
        removeElement(li);
    });

    ul.appendChild(li);

    try {
        const params = new URLSearchParams();
        params.append('name', name);
        params.append('url', url);

        fetch(`http://localhost:3000/?${params.toString()}`, { method: 'POST' });
    } catch (error) {
        console.log('erro na requisição');
    }
}

function removeElement(element) {
    const confirmar = confirm("Deseja realmente remover esse link?");
    if (confirmar) {
        element.remove();

        const name = element.querySelector('a').innerText;
        const url = element.querySelector('a').getAttribute('href');

        try {
            const params = new URLSearchParams();
            params.append('name', name);
            params.append('url', url);
            params.append('del', '1');

            fetch(`http://localhost:3000/?${params.toString()}`, { method: 'DELETE' });
        } catch (error) {
            console.log('erro na requisição');
        }
    }
}


form.addEventListener('submit', (event) => {
    
    event.preventDefault(); //campo para padrão

    let { value } = input

    if (!value)
        return alert('Preencha o campo!') //quando n tem nada manda preencher

    const [name, url] = value.split(',') 

    if (!url) //verifica se é um contúdo válido
        return alert('O texto não está formatado da maneira correta.')

    //exp. regular
    if (!/^http/.test(url)) //verifica se a url começa com http
        return alert('Digite a url da maneira correta.')

    addElement({ name, url })

    input.value = ''

})

