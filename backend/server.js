const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '../frontend')));

app.use(cors());
app.use(express.json());

const PORT = 3000;

// ================================
// Ler utilizadores
// ================================

function carregarUtilizadores() {
    return JSON.parse(fs.readFileSync("users.json", "utf8"));
}

// ================================
// Guardar utilizadores
// ================================

function guardarUtilizadores(users) {
    fs.writeFileSync(
        "users.json",
        JSON.stringify(users, null, 2)
    );
}

// ================================
// Página inicial
// ================================

app.get("/", (req, res) => {
    res.send("Banco Digital Kriolu API");
});

// ================================
// LOGIN
// ================================

app.post("/login", (req, res) => {

    const { username, password } = req.body;

    const users = carregarUtilizadores();

    const user = users.find(
        u => u.username === username
    );

    if (!user) {
        return res.status(401).json({
            message: "Utilizador não encontrado."
        });
    }

    if (user.locked) {
        return res.status(403).json({
            message: "Conta bloqueada."
        });
    }

    if (user.password !== password) {

        user.loginAttempts++;

        if (user.loginAttempts >= 3) {
            user.locked = true;
        }

        guardarUtilizadores(users);

        return res.status(401).json({
            message: "Palavra-passe incorreta."
        });

    }

    user.loginAttempts = 0;

    guardarUtilizadores(users);

    res.json({
        message: "Login efetuado com sucesso."
    });

});

// ================================
// ENVIAR OTP
// ================================

app.post("/send-otp", (req, res) => {

    const { username, metodo } = req.body;

    const users = carregarUtilizadores();

    const user = users.find(
        u => u.username === username
    );

    if (!user) {
        return res.status(404).json({
            message: "Utilizador não encontrado."
        });
    }

    const otp = Math.floor(
        100000 + Math.random() * 900000
    ).toString();

    user.otp = otp;

    user.otpExpires = Date.now() + 30000;

    guardarUtilizadores(users);

    console.log("\n==============================");
    console.log("BANCO DIGITAL KRIOLU");
    console.log("==============================");
    console.log("Utilizador:", user.username);
    console.log("Método:", metodo.toUpperCase());
    console.log("Código OTP:", otp);
    console.log("Validade: 30 segundos");
    console.log("==============================\n");

    res.json({
    message: "Código OTP enviado com sucesso.",
    otp: otp
    });

});

// ================================
// VALIDAR OTP
// ================================

app.post("/validate-otp", (req, res) => {

    const { username, otp } = req.body;

    const users = carregarUtilizadores();

    const user = users.find(
        u => u.username === username
    );

    if (!user) {
        return res.status(404).json({
            message: "Utilizador não encontrado."
        });
    }

    if (Date.now() > user.otpExpires) {

        return res.status(401).json({
            message: "O código OTP expirou."
        });

    }

    if (otp !== user.otp) {

        return res.status(401).json({
            message: "Código OTP incorreto."
        });

    }

    // impedir reutilização

    user.otp = "";
    user.otpExpires = 0;

    // histórico

    // Histórico

user.history.push({
    data: new Date().toLocaleString("pt-PT"),
    acao: "Login efetuado"
});

// Alerta Email

if(user.emailAlerts){

    console.log("");

    console.log("📧 ALERTA EMAIL");

    console.log("Email enviado para:", user.email);

}

// Alerta SMS

if(user.smsAlerts){

    console.log("");

    console.log("📱 ALERTA SMS");

    console.log("SMS enviado para:", user.telefone);

}

    guardarUtilizadores(users);

    res.json({
        message: "Autenticação realizada com sucesso."
    });

});

// ================================
// DADOS DO UTILIZADOR
// ================================

app.get("/user/:username", (req, res) => {

    const users = carregarUtilizadores();

    const user = users.find(
        u => u.username === req.params.username
    );

    if (!user) {

        return res.status(404).json({
            message: "Utilizador não encontrado."
        });

    }

    res.json(user);

});

// ================================
// HISTÓRICO
// ================================

app.get("/history/:username", (req, res) => {

    const users = carregarUtilizadores();

    const user = users.find(
        u => u.username === req.params.username
    );

    if (!user) {

        return res.status(404).json({
            message: "Utilizador não encontrado."
        });

    }

    res.json(user.history);

});

// ================================
// LOGOUT
// ================================

app.post("/logout", (req, res) => {

    const { username } = req.body;

    const users = carregarUtilizadores();

    const user = users.find(
        u => u.username === username
    );

    if (user) {

        user.history.push({
            data: new Date().toLocaleString("pt-PT"),
            acao: "Logout"
        });

        guardarUtilizadores(users);

    }

    res.json({
        message: "Sessão terminada."
    });

});

// ================================
// LOGIN BIOMÉTRICO
// ================================

app.post("/biometric-login", (req, res) => {

    const { username } = req.body;

    const users = carregarUtilizadores();

    const user = users.find(
        u => u.username === username
    );

    if(!user){

        return res.status(404).json({

            message:"Utilizador não encontrado."

        });

    }

    if(!user.biometricEnabled){

        return res.status(403).json({

            message:"Biometria não ativada."

        });

    }

    user.history.push({

        data:new Date().toLocaleString("pt-PT"),

        acao:"Login Biométrico"

    });

    guardarUtilizadores(users);

    res.json({

        message:"Autenticação biométrica efetuada com sucesso."

    });

});

// ================================
// DISPOSITIVO CONFIÁVEL
// ================================

app.post("/trust-device",(req,res)=>{

    const{

        username,

        dispositivo

    }=req.body;

    const users=

    carregarUtilizadores();

    const user=

    users.find(

        u=>u.username===username

    );

    if(!user){

        return res.status(404).json({

            message:"Utilizador não encontrado."

        });

    }

    user.deviceTrusted=true;

    user.lastDevice=dispositivo;

    guardarUtilizadores(users);

    res.json({

        message:"Dispositivo registado."

    });

});

// ================================
// QA - OBTER OTP (APENAS PARA TESTES)
// ================================

app.get("/qa/otp/:username", (req, res) => {

    const users = carregarUtilizadores();

    const user = users.find(
        u => u.username === req.params.username
    );

    if (!user) {

        return res.status(404).json({
            message: "Utilizador não encontrado."
        });

    }

    res.json({

        username: user.username,
        otp: user.otp,
        expires: user.otpExpires

    });

});

// ================================
// QA - Ativar/Desativar Biometria
// ================================

app.post("/qa/biometria", (req, res) => {

    const { username, enabled } = req.body;

    const users = carregarUtilizadores();

    const user = users.find(
        u => u.username === username
    );

    if (!user) {

        return res.status(404).json({
            message: "Utilizador não encontrado."
        });

    }

    user.biometricEnabled = enabled;

    guardarUtilizadores(users);

    res.json({

        message: enabled
            ? "Biometria ativada."
            : "Biometria desativada."

    });

});

// ================================
// QA - Repor utilizador
// ================================

app.post("/qa/reset-user", (req, res) => {

    const { username } = req.body;

    const users = carregarUtilizadores();

    const user = users.find(
        u => u.username === username
    );

    if (!user) {
        return res.status(404).json({
            message: "Utilizador não encontrado."
        });
    }

    user.locked = false;
    user.loginAttempts = 0;
    user.otp = "";
    user.otpExpires = 0;
    user.biometricEnabled = true;

    guardarUtilizadores(users);

    res.json({
        message: "Utilizador reposto."
    });

});

// ================================

app.listen(PORT, () => {

    console.log(
        `Servidor iniciado em http://localhost:${PORT}`
    );

});