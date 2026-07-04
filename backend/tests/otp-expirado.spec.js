const BASE_URL = process.env.BASE_URL || "http://127.0.0.1:5500/frontend";
const { test, expect } = require('@playwright/test');

test.setTimeout(45000);

test('NT-03 - Código OTP expirado', async ({ page, request }) => {

    // Repor estado do utilizador
    await request.post(
        'http://localhost:3000/qa/reset-user',
        {
            data: {
                username: 'admin'
            }
        }
    );
        
    // Abrir Login
    await page.goto(`${BASE_URL}/login.html`);

    // Login
    await page.fill('#username', 'admin');
    await page.fill('#password', 'Admin123@kalves');

    await page.click('#btnLogin');

    // Página 2FA
    await expect(page).toHaveURL(/metodo2fa\.html/);

    // Escolher Email
    await page.check('input[value="email"]');

    await page.click('#btnEnviar');

    // Esperar página OTP
    await page.waitForURL(/otp\.html/);

    // Esperar o OTP expirar (31 segundos)
    await page.waitForTimeout(31000);

    // Ler o OTP gerado
    const resposta = await page.request.get(
        'http://localhost:3000/qa/otp/admin'
    );

    const dados = await resposta.json();

    // Introduzir o OTP
    await page.fill('#otp', dados.otp);

    // Validar
    await page.click('#btnValidar');

    // Verificar mensagem
    await expect(page.locator('#mensagem'))
        .toContainText('O código OTP expirou.');

    // Continua na página OTP
    await expect(page).toHaveURL(/otp\.html/);

});