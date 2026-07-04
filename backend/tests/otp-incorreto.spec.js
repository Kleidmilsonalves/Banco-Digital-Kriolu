const BASE_URL = process.env.BASE_URL || "http://127.0.0.1:5500/frontend";
const { test, expect } = require('@playwright/test');

test('NT-02 - Código OTP incorreto', async ({ page }) => {

    // Abrir Login
    await page.goto(`${BASE_URL}/login.html`);

    // Login válido
    await page.fill('#username', 'admin');
    await page.fill('#password', 'Admin123@kalves');

    await page.click('#btnLogin');

    // Confirmar página 2FA
    await expect(page).toHaveURL(/metodo2fa\.html/);

    // Escolher Email
    await page.check('input[value="email"]');

    await page.click('#btnEnviar');

    // Esperar página OTP
    await page.waitForURL(/otp\.html/);

    // Introduzir um OTP errado
    await page.fill('#otp', '111111');

    // Validar
    await page.click('#btnValidar');

    // Verificar mensagem de erro
    await expect(page.locator('#mensagem'))
        .toContainText('Código OTP incorreto.');

    // Continua na página OTP
    await expect(page).toHaveURL(/otp\.html/);

});