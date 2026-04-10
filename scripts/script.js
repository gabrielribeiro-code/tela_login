let cadastro = false;

document.getElementById("toggle").onclick = () => {

    cadastro = !cadastro;

    //if simplificado
    // se cadastro "?" for verdadeiro se não Login
    document.getElementById("titulo"). innerText = cadastro ? "Cadastro" : "Login";
    document.querySelector("button").innerText = cadastro ? "Cadastrar" : "Entrar"; 

    document.getElementById("toggle").innerText = cadastro 
    ? "Já tem conta? Faça Login!" 
     : "Não tem conta? Cadastra-se!"; 

    document.getElementById("mensagem").innerHTML = "";

}

//todos os campos do formulário estão impedidos de zerar, prevenindo os campos de ir vazio. Pode ser qualquer letra usamos "e".

document.getElementById("form-login").onsubmit = (e) => {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let mensagem = document.getElementById("mensagem");

    mensagem.innerHTML = "";

    if(!email.includes("@") || !email.include(".")){
        mensagem.innerHTML = "<div class = 'erro' <p> Email invállido!</p> </div>";
    }

}