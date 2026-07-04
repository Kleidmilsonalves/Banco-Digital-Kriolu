const BASE_URL = process.env.BASE_URL || "http://127.0.0.1:5500/frontend";
const { test, expect } = require('@playwright/test');

test('CT-01 - Login com credenciais válidas', async ({ page }) => {

    // Abrir a página de login
    await page.goto(`${BASE_URL}/login.html`);

    // Introduzir utilizador
    await page.fill('#username', 'admin');

    // Introduzir palavra-passe
    await page.fill('#password', 'Admin123@kalves');

    // Clicar no botão Entrar
    await page.click('#btnLogin');

    // Verificar se foi para a página do método 2FA
    await expect(page).toHaveURL(/metodo2fa\.html/);

});