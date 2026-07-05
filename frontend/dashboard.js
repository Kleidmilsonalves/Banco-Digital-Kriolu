const username = localStorage.getItem("username");

async function carregarDados() {

    const resposta = await fetch(
        "http://localhost:3000/user/" + username
    );

    const user = await resposta.json();

    // ==========================
    // Dados principais
    // ==========================

    document.getElementById("nome").textContent =
    user.nome;
    
    document.getElementById("nomeTopo").innerHTML =
    "Olá, " + user.nome;

    document.getElementById("saldo").innerHTML =
        user.saldo + " CVE";

    document.getElementById("email").innerHTML =
        user.email;

    document.getElementById("telefone").innerHTML =
        user.telefone;

    // ==========================
    // Segurança
    // ==========================

    document.getElementById("device").innerHTML =
        user.deviceTrusted
            ? "🟢 Confiável"
            : "🔴 Não confiável";

    document.getElementById("biometria").innerHTML =
        user.biometricEnabled
            ? "🟢 Ativada"
            : "🔴 Desativada";

    document.getElementById("emailAlert").innerHTML =
        user.emailAlerts
            ? "🟢 Ativos"
            : "🔴 Desativados";

    document.getElementById("smsAlert").innerHTML =
        user.smsAlerts
            ? "🟢 Ativos"
            : "🔴 Desativados";

    // ==========================
    // Último acesso
    // ==========================

    if (user.history && user.history.length > 0) {

        const ultimo =
            user.history[user.history.length - 1];

        document.getElementById("ultimoAcesso").innerHTML =
            ultimo.data;

    }

   
}

carregarDados();

// ==========================
// Logout
// ==========================

document
    .getElementById("btnLogout")
    .addEventListener("click", logout);

async function logout() {

    await fetch(
        "http://localhost:3000/logout",
        {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({

                username

            })

        });

    localStorage.clear();

    window.location.href = "login.html";

}