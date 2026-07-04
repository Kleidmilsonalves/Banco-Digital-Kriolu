const BASE_URL = process.env.BASE_URL || "http://127.0.0.1:5500/frontend";
const { test, expect } = require('@playwright/test');

test('NT-01 - Palavra-passe incorreta', async ({ page }) => {

    // Abrir Login
    await page.goto(`${BASE_URL}/login.html`);
    // Utilizador
    await page.fill('#username', 'admin');

    // Palavra-passe errada
    await page.fill('#password', 'Admin123');

    // Entrar
    await page.click('#btnLogin');

    // Verificar mensagem de erro
    await expect(page.locator('#mensagem'))
        .toContainText('Palavra-passe incorreta.');

    // Continua na página de login
    await expect(page).toHaveURL(/login\.html/);

});