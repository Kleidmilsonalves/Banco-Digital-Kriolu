const { test, expect } = require('@playwright/test');

test('CT-04 - Logout', async ({ page, request }) => {

    // Abrir Login
    await page.goto('http://127.0.0.1:5500/frontend/login.html');

    // Login
    await page.fill('#username', 'admin');
    await page.fill('#password', 'Admin123@kalves');

    await page.click('#btnLogin');

    // Página 2FA
    await expect(page).toHaveURL(/metodo2fa\.html/);

    // Escolher Email
    await page.check('input[value="email"]');

    await page.click('#btnEnviar');

    // Esperar OTP
    await page.waitForURL(/otp\.html/);

    // Ler OTP
    const resposta = await request.get(
        'http://localhost:3000/qa/otp/admin'
    );

    const dados = await resposta.json();

    await page.fill('#otp', dados.otp);

    await page.click('#btnValidar');

    // Dashboard
    await expect(page).toHaveURL(/dashboard\.html/);

    // Logout
    await page.click('#btnLogout');

    // Deve voltar ao Login
    await expect(page).toHaveURL(/login\.html/);

});