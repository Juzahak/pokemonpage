let btn = document.querySelector("#verSenha")
let btnconfirme = document.querySelector("#verConfirmeSenha")

let nome = document.querySelector("#nome")
let labelNome = document.querySelector("#labelNome")
let validNome = false;

let usuario = document.querySelector("#usuario")
let labelUsuario = document.querySelector("#labelUsuario")
let validUsuario = false;

let senha = document.querySelector("#senha")
let labelSenha = document.querySelector("#labelSenha")
let validSenha = false;

let confirmeSenha = document.querySelector("#confirmSenha")
let labelConfirmeSenha = document.querySelector("#labelConfirmeSenha")
let validConfirmeSenha = false;

let msgSucesso = document.querySelector("#msgSucesso")
let msgError = document.querySelector("#msgError")

nome.addEventListener("keyup", () => {

    if (nome.value.length <= 3) {
     labelNome.setAttribute ("style", "color: red");
     labelNome.innerHTML = "<strong>Nome *Insira no minimo 3 caracteres</strong>"
     nome.setAttribute("style", "border-color: red")
     validNome = false;
    } else {
     labelNome.setAttribute ("style", "color: lime");
     labelNome.innerHTML = "Nome"
     nome.setAttribute("style", "border-color: lime")
     validNome = true;
    }
})

usuario.addEventListener("keyup", () => {

    if (usuario.value.length <= 4) {
     labelUsuario.setAttribute ("style", "color: red");
     labelUsuario.innerHTML = "<strong>Usuario *Insira no minimo 5 caracteres</strong>"
     usuario.setAttribute("style", "border-color: red")
     validUsuario = false;
    } else {
     labelUsuario.setAttribute ("style", "color: lime");
     labelUsuario.innerHTML = "Usuario"
     usuario.setAttribute("style", "border-color: lime")
     validUsuario = true;
    }
})

senha.addEventListener("keyup", () => {

    if (senha.value.length <= 4) {
     labelSenha.setAttribute ("style", "color: red");
     labelSenha.innerHTML = "<strong>Usuario *Insira no minimo 6 caracteres</strong>"
     senha.setAttribute("style", "border-color: red")
     validSenha = false;
    } else {
        labelSenha.setAttribute ("style", "color: lime");
        labelSenha.innerHTML = "Senha"
     senha.setAttribute("style", "border-color: lime")
     validSenha = true;
    }
})

confirmeSenha.addEventListener("keyup", () => {

    if (senha.value != confirmeSenha.value) {
     labelConfirmeSenha.setAttribute ("style", "color: red");
     labelConfirmeSenha.innerHTML = "<strong>Confirmar Senha *As senhas não conferem</strong>"
     confirmeSenha.setAttribute("style", "border-color: red")
     validConfirmeSenha = false;
    } else {
        labelConfirmeSenha.setAttribute ("style", "color: lime");
        labelConfirmeSenha.innerHTML = "Confirmar Senha"
        confirmeSenha.setAttribute("style", "border-color: lime")
        validConfirmeSenha = true;
    }
})




function cadastrar() {
    if(validNome && validUsuario && validSenha && validConfirmeSenha){
        let listaUser = JSON.parse(localStorage.getItem("listaUser") || "[]")

        listaUser.push(
            {
                nomeCad: nome.value,
                userCad: usuario.value,
                senhaCad: senha.value,
                valorInicial: 200
            }
        )

        localStorage.setItem("listaUser", JSON.stringify(listaUser))


        msgSucesso.setAttribute("style", "display: block")
        msgSucesso.innerHTML = "<strong>Cadastrando Usuário...</strong>"
        msgError.setAttribute("style", "display: none")
        msgError.innerHTML = ""

        setTimeout (() =>{
            window.location.href = "./login1.html"
        }, 3000)

        

    } else {
        msgError.setAttribute("style", "display: block")
        msgError.innerHTML = "<strong>Preencha todos os campos corretamente!</strong>"
        msgSucesso.setAttribute("style", "display: none")
        msgSucesso.innerHTML = ""
    }
}


btn.addEventListener("click", () =>{

    let inputSenha = document.querySelector("#senha")
    if(inputSenha.getAttribute("type") == "password"){
        inputSenha.setAttribute("type", "text")
    }else{
        inputSenha.setAttribute("type", "password")
    }

 })



btnconfirme.addEventListener("click", () =>{

    let inputConfirmeSenha = document.querySelector("#confirmSenha")
    if(inputConfirmeSenha.getAttribute("type") == "password"){
        inputConfirmeSenha.setAttribute("type", "text")
    }else{
        inputConfirmeSenha.setAttribute("type", "password")
    }

 })


