const { test, expect } = require('@playwright/test');

test('CT-08 - Dashboard + Histórico', async ({ page, request }) => {

    // Abrir Login
    await page.goto('http://127.0.0.1:5500/frontend/login.html');

    // Login
    await page.fill('#username', 'admin');
    await page.fill('#password', 'Admin123@kalves');

    await page.click('#btnLogin');

    // Página 2FA
    await expect(page).toHaveURL(/metodo2fa\.html/);

    // Email
    await page.check('input[value="email"]');

    await page.click('#btnEnviar');

    await page.waitForURL(/otp\.html/);

    // Ler OTP
    const respostaOTP = await request.get(
        'http://localhost:3000/qa/otp/admin'
    );

    const otp = await respostaOTP.json();

    // Validar
    await page.fill('#otp', otp.otp);

    await page.click('#btnValidar');

    // Dashboard
    await expect(page).toHaveURL(/dashboard\.html/);

    // Verificar elementos do Dashboard
    await expect(page.locator('#nome')).not.toBeEmpty();

    await expect(page.locator('#saldo')).toContainText('CVE');

    await expect(page.locator('#email')).toContainText('@');

    await expect(page.locator('#telefone')).toContainText('+238');

    // Verificar histórico pela API
    const resposta = await request.get(
        'http://localhost:3000/history/admin'
    );

    const historico = await resposta.json();

    expect(historico.length).toBeGreaterThan(0);

    expect(
        historico.some(h => h.acao === 'Login efetuado')
    ).toBeTruthy();

});