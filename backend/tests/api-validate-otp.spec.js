const { test, expect } = require('@playwright/test');

test('API-02 - POST /validate-otp', async ({ request }) => {

    // Gerar um OTP
    await request.post(
        'http://localhost:3000/send-otp',
        {
            data: {
                username: 'admin',
                metodo: 'email'
            }
        }
    );

    // Ler o OTP gerado
    const respostaOTP = await request.get(
        'http://localhost:3000/qa/otp/admin'
    );

    const otp = await respostaOTP.json();

    // Validar o OTP
    const resposta = await request.post(
        'http://localhost:3000/validate-otp',
        {
            data: {
                username: 'admin',
                otp: otp.otp
            }
        }
    );

    // Verificar resposta
    expect(resposta.status()).toBe(200);

    const dados = await resposta.json();

    expect(dados.message)
        .toBe('Autenticação realizada com sucesso.');

});