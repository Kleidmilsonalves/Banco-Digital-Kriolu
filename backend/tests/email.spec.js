const { test, expect } = require('@playwright/test');

test('CT-06 - Alerta por Email', async ({ page, request }) => {

    // Abrir Login
    await page.goto('http://127.0.0.1:5500/frontend/login.html');

    // Login
    await page.fill('#username', 'admin');
    await page.fill('#password', 'Admin123@kalves');

    await page.click('#btnLogin');

    // Método 2FA
    await expect(page).toHaveURL(/metodo2fa\.html/);

    await page.check('input[value="email"]');

    await page.click('#btnEnviar');

    await page.waitForURL(/otp\.html/);

    // Ler OTP
    const respostaOTP = await request.get(
        'http://localhost:3000/qa/otp/admin'
    );

    const otp = await respostaOTP.json();

    // Validar OTP
    await page.fill('#otp', otp.otp);

    await page.click('#btnValidar');

    // Dashboard
    await expect(page).toHaveURL(/dashboard\.html/);

    // Confirmar configuração do utilizador
    const resposta = await request.get(
        'http://localhost:3000/user/admin'
    );

    const user = await resposta.json();

    expect(user.emailAlerts).toBe(true);

});