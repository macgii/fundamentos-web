/*
Case Sensitive = reconhece letras maiusculas e minusculas

Acessando elementos por

Tag: getElementByTagName()
Id: getElementById()
Nome: getElementsByName()
Classe: getElementsByClassName()
Seletor: querySelector()
*/

let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;

nome.style.width = "100%";
email.style.width = "100%";

function validaNome() {
  let textoNome = document.querySelector("#textoNome");
  if (nome.value.length < 3) {
    textoNome.innerHTML = "Nome Inválido";
    textoNome.style.color = "red";
  } else {
    textoNome.innerHTML = "Nome Válido";
    textoNome.style.color = "green";
    nomeOK = true;
  }
}

function validaEmail() {
  let textoEmail = document.querySelector("#textoEmail");
  if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
    textoEmail.innerHTML = "Email Inválido";
    textoEmail.style.color = "red";
  } else {
    textoEmail.innerHTML = "Email Válido";
    textoEmail.style.color = "green";
    emailOk = true;
  }
}

function validaAssunto() {
  let textoAssunto = document.querySelector("#textoAssunto");
  if (assunto.value.length > 200) {
    textoAssunto.innerHTML = "Digite no máximo 200 caracteres";
    textoAssunto.style.color = "red";
    textoAssunto.style.display = "block";
  } else {
    textoAssunto.style.display = "none";
    assuntoOk = true;
  }
}

function enviar() {
  if (nomeOk == true && emailOk == true && assuntoOk == true) {
    alert("Formulário enviado com sucesso!");
  } else {
    alert("Preencha todos os campos do formulário antes de enviar.");
  }
}
