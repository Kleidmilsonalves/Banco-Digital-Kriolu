const BASE_URL = process.env.BASE_URL || "http://127.0.0.1:5500/frontend";
const { test, expect } = require('@playwright/test');

test('CT-02 - Login + OTP', async ({ page, request }) => {

    // Abrir login
    await page.goto(`${BASE_URL}/login.html`);

    // Login
    await page.fill('#username', 'admin');
    await page.fill('#password', 'Admin123@kalves');
    await page.click('#btnLogin');

    // Confirmar página 2FA
    await expect(page).toHaveURL(/metodo2fa\.html/);

    // Escolher Email
    await page.check('input[value="email"]');

    // Enviar código
    await page.click('#btnEnviar');
    await page.waitForURL(/otp\.html/);

    // Ler o OTP que já foi gerado
    const resposta = await request.get(
        'http://localhost:3000/qa/otp/admin'
    );

    const dados = await resposta.json();

    // Introduzir o OTP recebido
    await page.fill('#otp', dados.otp);

    // Validar
    await page.click('#btnValidar');

    // Confirmar Dashboard
    await expect(page).toHaveURL(/dashboard\.html/);

});