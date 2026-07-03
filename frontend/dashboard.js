const username = localStorage.getItem("username");

async function carregarDados(){

    const resposta =
    await fetch(
    "http://localhost:3000/user/"+username);

    const user =
    await resposta.json();

    document.getElementById("nome").innerHTML =
    user.nome;

    document.getElementById("saldo").innerHTML =
    user.saldo + " CVE";

    document.getElementById("email").innerHTML =
    user.email;

    document.getElementById("telefone").innerHTML =
    user.telefone;

}

carregarDados();

document
.getElementById("btnLogout")
.addEventListener("click",logout);

async function logout(){

    await fetch(
    "http://localhost:3000/logout",{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({

            username

        })

    });

    localStorage.clear();

    window.location.href="login.html";

}