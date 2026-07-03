const { test, expect } = require('@playwright/test');

test('CT-03 - Login Biométrico', async ({ page }) => {

    // Abrir Login
    await page.goto('http://127.0.0.1:5500/frontend/login.html');

    // Introduzir utilizador
    await page.fill('#username', 'admin');

    // Clicar em Entrar com Biometria
    await page.click('#btnBiometria');

    // Confirmar Dashboard
    await expect(page).toHaveURL(/dashboard\.html/);

});