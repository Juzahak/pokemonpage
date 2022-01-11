let userLogado = JSON.parse(localStorage.getItem("userLogado"));
let logado = document.querySelector("#logado");
let nomeCima = document.querySelector("#cad-log");
let estrelasCima = document.querySelector("#cad-estrelas");
let deposito = document.getElementsByClassName("deposito");
let compra = document.getElementsByClassName("compra");
let { Estrelas } = JSON.parse(localStorage.getItem("userLogado"));
let { user } = JSON.parse(localStorage.getItem("userLogado"));

let listaUser = JSON.parse(localStorage.getItem("listaUser"));

//console.log(valorInicial)
//const index = listaUser.findIndex(user => user.value == valorInicial)
//let valornovo = (listaUser[index].valorInicial = Estrelas)
//const NewStarUser = {...ListaUser, valorInicial:valornovo}

document
  .getElementsByClassName("adicionar")[0]
  .addEventListener("click", encontrarUsuario());
document
  .getElementsByClassName("reduzir")[0]
  .addEventListener("click", encontrarUsuario());

function encontrarUsuario() {
  for (var i = 0; i < listaUser.length; i++) {
    let [{ valorInicial }] = JSON.parse(localStorage.getItem("listaUser"));
    let lista = listaUser[i];
    let valorcheio = lista.valorInicial;
    let achei = userLogado.nome === lista.nomeCad;
    console.log(achei, valorcheio, lista);

    if (userLogado.nome === lista.nomeCad) {
      let valorcheio = (lista.valorInicial = Estrelas);

      const NewStarUser = [...listaUser];

      localStorage.setItem("listaUser", JSON.stringify(NewStarUser));

      console.log(NewStarUser);

      return;
    } else {
      console.log("false", valorInicial);
    }
  }
}

nomeCima.innerHTML = userLogado.nome;

estrelasCima.innerHTML = userLogado.Estrelas + "★";

if (localStorage.getItem("token") == null) {
  alert("Você precisa esta logado!");
  window.location.href = "./login1.html";
}

function sair() {
  encontrarUsuario();

  localStorage.removeItem("token");
  localStorage.removeItem("userLogado");

  window.location.href = "./login1.html";
}

//document.getElementsByClassName("adicionar")[0].addEventListener("click", inputValue)

var capturarValor = "";

function capturarSoma() {
  let { Estrelas } = JSON.parse(localStorage.getItem("userLogado"));
  capturarValor = document.getElementById("deposito").value;
  somaTotal = parseInt(capturarValor) + Estrelas;

  if (somaTotal < Estrelas) {
    alert("Não é possivel usar valores negativos!");
  } else if (capturarValor == "") {
    alert("insira um valor!");
  } else {
    const NewStarUser = {
      ...userLogado,
      Estrelas: somaTotal
    };

    localStorage.setItem("userLogado", JSON.stringify(NewStarUser));

    estrelasCima.innerHTML = NewStarUser + "★";

    console.log(NewStarUser);

    window.location.href = "./Estrelas.html";
  }
  encontrarUsuario();
}

function capturarSaque() {
  let { Estrelas } = JSON.parse(localStorage.getItem("userLogado"));
  capturarValor = document.getElementById("saque").value;
  somaTotal = Estrelas - parseInt(capturarValor);

  if (capturarValor == "") {
    alert("insira um valor!");
  } else if (capturarValor <= 0) {
    alert("Não é possivel usar valores negativos!");
  } else if (somaTotal < 0) {
    alert("Saldo insuficiente!");
    return;
  } else {
    const NewStarUser = {
      ...userLogado,
      Estrelas: somaTotal
    };

    localStorage.setItem("userLogado", JSON.stringify(NewStarUser));

    estrelasCima.innerHTML = NewStarUser + "★";

    console.log(NewStarUser);

    window.location.href = "./estrelas.html";
  }
  encontrarUsuario();
}

function inputValue(event) {
  var input = event.target;
}
