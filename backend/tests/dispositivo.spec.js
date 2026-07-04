const BASE_URL = process.env.BASE_URL || "http://127.0.0.1:5500/frontend";
const { test, expect } = require('@playwright/test');

test('CT-05 - Dispositivo Confiável', async ({ page, request }) => {

    // Abrir Login
    await page.goto(`${BASE_URL}/login.html`);
    // Credenciais
    await page.fill('#username', 'admin');
    await page.fill('#password', 'Admin123@kalves');

    // Marcar dispositivo confiável
    await page.check('#deviceTrusted');

    // Login
    await page.click('#btnLogin');

    // Página 2FA
    await expect(page).toHaveURL(/metodo2fa\.html/);

    // Escolher Email
    await page.check('input[value="email"]');

    // Enviar código
    await page.click('#btnEnviar');

    // Esperar OTP
    await page.waitForURL(/otp\.html/);

    // Ler OTP
    const respostaOTP = await request.get(
        'http://localhost:3000/qa/otp/admin'
    );

    const otp = await respostaOTP.json();

    // Introduzir OTP
    await page.fill('#otp', otp.otp);

    await page.click('#btnValidar');

    // Dashboard
    await expect(page).toHaveURL(/dashboard\.html/);

    // Confirmar dispositivo
    const resposta = await request.get(
        'http://localhost:3000/user/admin'
    );

    const user = await resposta.json();

    expect(user.deviceTrusted).toBe(true);

});