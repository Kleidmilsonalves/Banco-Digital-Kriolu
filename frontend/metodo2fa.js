document
.getElementById("btnEnviar")
.addEventListener("click", enviarCodigo);

async function enviarCodigo(){

    const metodo =
    document.querySelector(
        'input[name="metodo"]:checked'
    ).value;

    const username =
    localStorage.getItem("username");

    const mensagem =
    document.getElementById("mensagem");

    mensagem.innerHTML="";

    try{

        const resposta =
        await fetch(
        "http://localhost:3000/send-otp",{

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({

                username,
                metodo

            })

        });

        const dados =
        await resposta.json();

        if(resposta.ok){

    mensagem.className="sucesso";

    mensagem.innerHTML=
    dados.message;

    // Guardar dispositivo confiável
    if(localStorage.getItem("deviceTrusted")==="true"){

        await fetch(
            "http://localhost:3000/trust-device",{

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({

                username,

                dispositivo:navigator.userAgent

            })

        });

    }

    window.location.href="otp.html";

}
        else{

            mensagem.className="erro";

            mensagem.innerHTML=
            dados.message;

        }

    }catch(erro){

        console.log(erro);

        mensagem.className="erro";

        mensagem.innerHTML=
        "Erro ao comunicar com o servidor.";

    }

}