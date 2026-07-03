const { test, expect } = require('@playwright/test');

test('Login com credenciais válidas', async ({ page }) => {

    await page.goto('http://127.0.0.1:5500/frontend/login.html');

    await page.fill('#username', 'admin');
    await page.fill('#password', 'Admin123@kalves');

    await page.getByRole('button', { name: 'Entrar' }).click();

    // Deve abrir a página de escolha do método 2FA
    await expect(page).toHaveURL(/metodo2fa\.html/);

});