const BASE_URL = process.env.BASE_URL || "http://127.0.0.1:5500/frontend";
const { test, expect } = require('@playwright/test');

test('NT-04 - Biometria desativada', async ({ page, request }) => {

    // Desativar biometria
    await request.post(
        'http://localhost:3000/qa/biometria',
        {
            data: {
                username: 'admin',
                enabled: false
            }
        }
    );

    // Abrir Login
    await page.goto(`${BASE_URL}/login.html`);

    // Utilizador
    await page.fill('#username', 'admin');

    // Login biométrico
    await page.click('#btnBiometria');

    // Verificar mensagem
    await expect(page.locator('#mensagem'))
        .toContainText('Biometria não ativada.');

    // Continua no Login
    await expect(page).toHaveURL(/login\.html/);

    // Voltar a ativar a biometria
    await request.post(
        'http://localhost:3000/qa/biometria',
        {
            data: {
                username: 'admin',
                enabled: true
            }
        }
    );

});