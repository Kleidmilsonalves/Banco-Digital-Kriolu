const { test, expect } = require('@playwright/test');

test('API-01 - POST /login', async ({ request }) => {

    const resposta = await request.post(
        'http://localhost:3000/login',
        {
            data: {
                username: 'admin',
                password: 'Admin123@kalves'
            }
        }
    );

    expect(resposta.status()).toBe(200);

    const dados = await resposta.json();

    expect(dados.message)
        .toBe('Login efetuado com sucesso.');

});