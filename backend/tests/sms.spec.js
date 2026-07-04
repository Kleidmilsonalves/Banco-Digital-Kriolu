const BASE_URL = process.env.BASE_URL || "http://127.0.0.1:5500/frontend";
const { test, expect } = require('@playwright/test');

test('CT-07 - Alerta por SMS', async ({ page, request }) => {

    // Abrir Login
    await page.goto(`${BASE_URL}/login.html`);
    // Login
    await page.fill('#username', 'admin');
    await page.fill('#password', 'Admin123@kalves');

    await page.click('#btnLogin');

    // Confirmar página 2FA
    await expect(page).toHaveURL(/metodo2fa\.html/);

    // Escolher SMS
    await page.check('input[value="sms"]');

    // Enviar código
    await page.click('#btnEnviar');

    // Esperar página OTP
    await page.waitForURL(/otp\.html/);

    // Ler OTP
    const respostaOTP = await request.get(
        'http://localhost:3000/qa/otp/admin'
    );

    const otp = await respostaOTP.json();

    // Introduzir OTP
    await page.fill('#otp', otp.otp);

    // Validar
    await page.click('#btnValidar');

    // Dashboard
    await expect(page).toHaveURL(/dashboard\.html/);

    // Confirmar alerta SMS ativo
    const resposta = await request.get(
        'http://localhost:3000/user/admin'
    );

    const user = await resposta.json();

    expect(user.smsAlerts).toBe(true);

});