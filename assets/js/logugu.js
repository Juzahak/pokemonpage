let userLogado = JSON.parse(localStorage.getItem("userLogado"))
let logado = document.querySelector("#logado")
let nomeCima = document.querySelector("#cad-log")
let estrelasCima = document.querySelector("#cad-estrelas")
let estrelasCimaValor = JSON.parse(localStorage.getItem("Estrelas"))

listaUser = JSON.parse(localStorage.getItem("listaUser"))

let {
    Estrelas
} = JSON.parse(localStorage.getItem("userLogado"))


nomeCima.innerHTML = userLogado.nome

estrelasCima.innerHTML = userLogado.Estrelas + "★"


if (localStorage.getItem("token") == null) {
    alert("Você precisa esta logado!")
    window.location.href = "./login.html"
}

function sair() {
    encontrarUsuario()
    localStorage.removeItem("token")
    localStorage.removeItem("userLogado")
    window.location.href = "./login.html"
}

function encontrarUsuario() {

    for (var i = 0; i < listaUser.length; i++) {
        let [{
            valorInicial
        }] = JSON.parse(localStorage.getItem("listaUser"))
        let lista = listaUser[i]
        let valorcheio = lista.valorInicial
        let achei = userLogado.nome === lista.nomeCad
        console.log(achei, valorcheio, lista)

        if (userLogado.nome === lista.nomeCad) {


            let valorcheio = lista.valorInicial = Estrelas

            const NewStarUser = [...listaUser]

            localStorage.setItem("listaUser", JSON.stringify(NewStarUser))

            console.log(NewStarUser)

            return
        } else {
            console.log("false", valorInicial)
        }
    }
}
