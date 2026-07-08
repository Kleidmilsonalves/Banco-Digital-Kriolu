# 🏦 Banco Digital Kriolu

Sistema de Banco Digital desenvolvido no âmbito da unidade curricular **Teste de Qualidade de Software**, com foco na segurança da autenticação, testes automatizados e integração contínua (CI/CD).

---

## 📖 Descrição

O **Banco Digital Kriolu** é uma aplicação Web que simula um sistema bancário digital, permitindo que os utilizadores efetuem o login através de autenticação segura com **palavra-passe**, **Autenticação em Dois Fatores (2FA)** e **login biométrico**.

Além das funcionalidades da aplicação, o projeto inclui uma estratégia de testes automatizados utilizando **Playwright**, garantindo a validação das funcionalidades mais importantes do sistema.

---

## 🎯 Objetivos

- Desenvolver uma aplicação Web com autenticação segura.
- Implementar autenticação em dois fatores (2FA).
- Simular login biométrico.
- Automatizar testes funcionais.
- Aplicar práticas de Integração Contínua (CI).
- Publicar a aplicação utilizando Render.

---

## ✨ Funcionalidades

- Login com utilizador e palavra-passe
- Autenticação em Dois Fatores (OTP)
- Envio do código OTP por Email ou SMS
- Login Biométrico
- Dispositivo Confiável
- Recuperação de palavra-passe
- Dashboard do utilizador
- Histórico de operações
- Logout

---

# 🛠 Tecnologias Utilizadas

## Frontend

- HTML5
- CSS3
- JavaScript

## Backend

- Node.js
- Express.js
- CORS

## Testes

- Playwright

## Controlo de Versões

- Git
- GitHub

## Deploy

- Render

## CI/CD

- GitHub Actions

---

# 📂 Estrutura do Projeto

```text
Banco-Digital-Kriolu/

├── frontend/
│   ├── login.html
│   ├── metodo2fa.html
│   ├── otp.html
│   ├── dashboard.html
│   ├── recuperar.html
│   ├── login.js
│   ├── dashboard.js
│   ├── otp.js
│   ├── metodo2fa.js
│   └── style.css
│
├── backend/
│   ├── server.js
│   ├── users.json
│   ├── email.js
│   ├── sms.js
│   ├── tests/
│   ├── package.json
│   └── playwright.config.js
│
└── README.md
```

---

# 🔐 Fluxo de Funcionamento

1. O utilizador introduz as credenciais.
2. O sistema valida o utilizador.
3. O utilizador escolhe Email ou SMS.
4. O sistema gera um código OTP.
5. O código é validado.
6. O Dashboard é apresentado.
7. O utilizador pode terminar a sessão através do Logout.

---

# 🧪 Testes Automatizados

Os testes foram desenvolvidos utilizando **Playwright**.

Foram implementados testes para validar:

- Login válido
- Login inválido
- Palavra-passe incorreta
- OTP correto
- OTP incorreto
- OTP expirado
- Dashboard
- Logout
- Login biométrico
- Biometria desativada
- Dispositivo confiável
- APIs de Login
- APIs de OTP

Os testes garantem que todas as funcionalidades principais da aplicação funcionam corretamente.

---

# 🚀 Como executar o projeto

## 1. Clonar o repositório

```bash
git clone https://github.com/SEU_UTILIZADOR/Banco-Digital-Kriolu.git
```

## 2. Entrar no projeto

```bash
cd Banco-Digital-Kriolu/backend
```

## 3. Instalar dependências

```bash
npm install
```

## 4. Executar o servidor

```bash
npm start
```

ou

```bash
node server.js
```

---

# ▶️ Executar os testes

```bash
npx playwright test
```

---

# 📊 Visualizar o relatório dos testes

```bash
npx playwright show-report
```

---

# 🌐 Deploy com Render

A aplicação pode ser publicada utilizando a plataforma **Render**.

### Passos

1. Criar uma conta no Render.
2. Ligar o repositório GitHub.
3. Criar um novo **Web Service**.
4. Configurar:

**Build Command**

```bash
npm install
```

**Start Command**

```bash
npm start
```

Após cada atualização enviada para o GitHub, o Render pode efetuar automaticamente um novo deploy da aplicação.

---

# 🔄 Integração Contínua (CI)

O projeto utiliza **GitHub Actions** para automatizar o processo de integração contínua.

Sempre que é realizado um **push** ou **pull request**, o workflow executa automaticamente:

- Checkout do código
- Instalação das dependências
- Execução dos testes Playwright
- Geração do relatório de testes

Este processo permite identificar erros antes da integração de novas alterações.

---

# 🚀 Entrega Contínua (CD)

Após a conclusão com sucesso dos testes, o código fica preparado para publicação.

Quando integrado com o **Render**, o deploy é realizado automaticamente sempre que existe uma nova versão no ramo principal.

O fluxo completo é:

```text
Programador
      │
      ▼
GitHub
      │
      ▼
GitHub Actions
      │
      ▼
Testes Playwright
      │
      ▼
Render
      │
      ▼
Aplicação publicada
```

---

# 📈 Benefícios da utilização de CI/CD

- Automatização dos testes
- Deteção precoce de erros
- Deploy automático
- Melhor qualidade do software
- Redução de falhas em produção
- Desenvolvimento mais seguro
Link de CD utilizamos o render: https://banco-digital-kriolu.onrender.com
---

# 👨‍💻 Autores

**Kleidmilson Alves Ruth De Melo Isberto Varela Rafael da Moura**

Projeto desenvolvido para a unidade curricular **Teste de Qualidade de Software**, aplicando conceitos de desenvolvimento Web, autenticação segura, testes automatizados, integração contínua e deploy em ambiente de produção.

---

# 📄 Licença

Este projeto foi desenvolvido exclusivamente para fins académicos.
