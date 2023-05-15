/*
Case Sensitive = reconhece letras maiusculas e minúsculas

por Tag: getElementsTagName()
por ID:  getElementsById()
por Nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector() ** mais usado ** pois conseguimos selecionar só tag, id ou classe.

obs: Element ou ElementS
*/

let nome = window.document.getElementById("nome") // pegue o elemento pelo Id nome // uma das formas de acessar o DOM
let email = document.querySelector("input#email") // dentro do input chama o ID email // # é usada para ID e . (ponto) é para CLASSE
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false

nome.style.width = "100%"
email.style.width = "100%"



function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }

}

    function validaEmail(){
        let txtEmail = document.querySelector('#txtEmail')

        if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ){
            txtEmail.innerHTML = 'Email Inválido'
            txtEmail.style.color = 'red'
        } else {
            txtEmail.innerHTML = 'Email Válido'
            txtEmail.style.color = 'green'
            emailOk = true
        }
    }

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = 'Texto muito grande, digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
        assuntoOk = true
    } else {
        txtAssunto.style.display = 'none'
    }
}

function enviar(){
    if (nomeOk == true && emailOk == true && assuntoOk == true){
        alert ('Formulário enviado com sucesso!')
    } else {
        alert ('Preencha o formulário corretamente antes de enviar...')
    }
}