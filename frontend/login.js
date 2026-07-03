// ===============================
// Mostrar/Ocultar Palavra-passe
// ===============================

const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");

togglePassword.addEventListener("click", () => {

    if (password.type === "password") {

        password.type = "text";

        togglePassword.classList.remove("fa-eye-slash");
        togglePassword.classList.add("fa-eye");

    } else {

        password.type = "password";

        togglePassword.classList.remove("fa-eye");
        togglePassword.classList.add("fa-eye-slash");

    }

});

// ===============================
// Carregar utilizador guardado
// ===============================

window.onload = () => {

    const ultimo = localStorage.getItem("ultimoUtilizador");

    if (ultimo) {

        document.getElementById("username").value = ultimo;
        document.getElementById("lembrar").checked = true;

    }

};

// ===============================
// Login
// ===============================

document.getElementById("btnLogin").addEventListener("click", login);

async function login() {

    const username = document.getElementById("username").value.trim();

    const password = document.getElementById("password").value;

    console.log("Username:", username);
    console.log("Password:", password);

    const lembrar = document.getElementById("lembrar").checked;
    const dispositivo = document.getElementById("deviceTrusted").checked;

    const mensagem = document.getElementById("mensagem");

    mensagem.innerHTML = "";
    mensagem.className = "";

    // Validação

    if (username === "" || password === "") {

        mensagem.className = "erro";
        mensagem.innerHTML = "Preencha todos os campos.";

        return;

    }

    // Guardar utilizador

    if (lembrar) {

        localStorage.setItem("ultimoUtilizador", username);

    } else {

        localStorage.removeItem("ultimoUtilizador");

    }

    try {

        const resposta = await fetch("http://localhost:3000/login", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify({

                username,
                password

            })

        });

        const dados = await resposta.json();

        if (resposta.ok) {

            mensagem.className = "sucesso";
            mensagem.innerHTML = dados.message;

            localStorage.setItem("username", username);

if(dispositivo){

    localStorage.setItem(
        "deviceTrusted",
        "true"
    );

}else{

    localStorage.removeItem(
        "deviceTrusted"
    );

}

window.location.href = "metodo2fa.html";

        } else {

            mensagem.className = "erro";
            mensagem.innerHTML = dados.message;

        }

    } catch (erro) {

        mensagem.className = "erro";
        mensagem.innerHTML = "Não foi possível ligar ao servidor.";

        console.error(erro);

    }

}

// ===============================
// Login Biométrico
// ===============================

document
.getElementById("btnBiometria")
.addEventListener("click", loginBiometrico);

async function loginBiometrico(){

    const username =
    document.getElementById("username").value.trim();

    const mensagem =
    document.getElementById("mensagem");

    if(username===""){

        mensagem.className="erro";

        mensagem.innerHTML=
        "Introduza o utilizador.";

        return;

    }

    try{

        const resposta =
        await fetch(
        "http://localhost:3000/biometric-login",{

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({

                username

            })

        });

        const dados =
        await resposta.json();

        if(resposta.ok){

    localStorage.setItem("username", username);

    // Vai diretamente para o Dashboard
    window.location.href = "dashboard.html";

}
        else{

            mensagem.className="erro";

            mensagem.innerHTML=
            dados.message;

        }

    }catch{

        mensagem.className="erro";

        mensagem.innerHTML=
        "Erro na autenticação biométrica.";

    }

}