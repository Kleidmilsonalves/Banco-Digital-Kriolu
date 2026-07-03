const username = localStorage.getItem("username");

const mensagem = document.getElementById("mensagem");
const contador = document.getElementById("contador");

let tempo = 30;

// Contador
const cronometro = setInterval(() => {

    tempo--;

    contador.innerHTML = tempo + " segundos";

    if (tempo <= 0) {

        clearInterval(cronometro);

        contador.innerHTML = "Código expirado";

    }

}, 1000);

// Botão Validar
document.getElementById("btnValidar").addEventListener("click", async (e) => {

    e.preventDefault();

    const otp = document.getElementById("otp").value.trim();

    if (!otp) {

        mensagem.className = "erro";
        mensagem.innerHTML = "Introduza o código OTP.";
        return;

    }

    try {

        const resposta = await fetch("http://localhost:3000/validate-otp", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                username,
                otp
            })

        });

        const dados = await resposta.json();

        if (resposta.ok) {

            // Em vez de mostrar a mensagem e esperar,
            // muda imediatamente para o Dashboard.
            window.location.href = "dashboard.html";

        } else {

            mensagem.className = "erro";
            mensagem.innerHTML = dados.message;

        }

    } catch (erro) {

        console.error(erro);

        mensagem.className = "erro";
        mensagem.innerHTML = "Erro ao comunicar com o servidor.";

    }

});

// Botão Reenviar
document.getElementById("btnReenviar").addEventListener("click", async (e) => {

    e.preventDefault();

    await fetch("http://localhost:3000/send-otp", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({

            username,
            metodo: "email"

        })

    });

    tempo = 30;

    mensagem.className = "sucesso";
    mensagem.innerHTML = "Novo código enviado.";

});