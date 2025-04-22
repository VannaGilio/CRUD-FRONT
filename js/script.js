'use strict'

export async function getContatosPorNome (nome) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos?nome_like=^${nome}`
    console.log(url)
    const response = await fetch(url)
    const data = await response.json()
    return data
}

export async function getContatos () {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

async function postContato(contato) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos`
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(contato)
    }

    const response = await fetch(url, options)
    return response.ok

}

async function putContato(contato, id) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(contato)
    }

    const response = await fetch(url, options)
    return response.ok

}

async function deleteContato(contato, id) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`
    const options = {
        method: 'DELETE',
    }

    const response = await fetch(url, options)
    return response.ok

}

// const contatoTeste = {
//     "nome": "Jesus",
//     "celular": "11 7 7777-7777",
//     "foto": "../img/jesus.png",
//     "email": "jesus@gmail.com",
//     "endereco": "Rua Ceu, 1",
//     "cidade": "Jandira"
// }
