'use strict'

import { getContatos,getContatosPorNome, postContato } from "./script.js"

function criarCard (contato) {
    const container = document.getElementById('container')
    const card = document.createElement('div')
    card.classList.add('card-contato')
    card.innerHTML = `
                <img src="${contato.foto}" alt="pessoa">
                <h2>${contato.nome}</h2>
                <p${contato.celular}</p>
    `
    container.appendChild(card)
}

async function carregarCards(){
    const contatos = await getContatos()

    contatos.forEach (criarCard)
}

async function carregarPesquisa (evento){
    const container = document.getElementById('container')
    if(evento.key == 'Enter'){
        const contatos = await getContatosPorNome(evento.target.value)
        container.replaceChildren('')
        contatos.forEach(criarCard)
    }
}

function cancelar (){
    document.querySelector('main').className = 'card-show'
}

function novoContato (){
    document.querySelector('main').className = 'form-show'
}

function salvarContato (){

    const form = document.querySelector('form')
    console.log(form.reportValidity)

    if(form.reportValidity() == false){
        return
    }

    const contato = {
                    "celular": document.getElementById('nome').value,
                    "foto": document.getElementById('foto').value,
                    "celular": document.getElementById('celular').value,
                    "email": document.getElementById('email').value,
                    "endereco": document.getElementById('endereco').value,
                    "cidade": document.getElementById('cidade').value
    }
    if(postContato(contato)){
        alert('Criado com sucesso!')
        carregarCards()
        cancelar()
    }
}

carregarCards()

document.getElementById('nome-contato').addEventListener('keydown', carregarPesquisa)

document.getElementById('novo-contato').addEventListener('click', novoContato)

document.getElementById('cancelar').addEventListener('click', cancelar)

document.getElementById('salvar').addEventListener('click', salvarContato)