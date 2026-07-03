# 🏦 Banco Digital Kriolu

Sistema de autenticação segura desenvolvido no âmbito da **Sprint Mission 1** da unidade curricular **Testes e Qualidade de Software**.

O projeto implementa um conjunto de mecanismos de segurança para proteger o acesso às contas dos clientes de um banco digital, recorrendo a autenticação multifator, autenticação biométrica simulada, reconhecimento de dispositivos confiáveis e testes automatizados.

---

# Objetivos

- Implementar um sistema de autenticação seguro.
- Aplicar autenticação em dois fatores (2FA).
- Implementar autenticação biométrica simulada.
- Reconhecer dispositivos confiáveis.
- Enviar alertas de segurança por Email e SMS.
- Automatizar os testes utilizando Playwright.

---

# Funcionalidades

- ✅ Login com utilizador e palavra-passe
- ✅ Autenticação em Dois Fatores (OTP)
- ✅ Escolha do método de envio (Email ou SMS)
- ✅ Validação do código OTP
- ✅ Dashboard do utilizador
- ✅ Histórico de acessos
- ✅ Recuperação de conta
- ✅ Logout
- ✅ Autenticação biométrica (simulada)
- ✅ Reconhecimento de dispositivos confiáveis
- ✅ Alertas de segurança por Email
- ✅ Alertas de segurança por SMS

---

# Tecnologias Utilizadas

| Tecnologia | Finalidade |
|------------|------------|
| HTML5 | Interface |
| CSS3 | Estilos |
| JavaScript | Frontend |
| Node.js | Backend |
| Express.js | API REST |
| JSON | Base de dados |
| Playwright | Testes Automatizados |
| Visual Studio Code | Desenvolvimento |
| Git | Controlo de versões |
| GitHub | Hospedagem do projeto |

---

# Estrutura do Projeto

```
Banco-Digital-Kriolu/
│
├── backend/
│   ├── server.js
│   ├── users.json
│   └── package.json
│
├── frontend/
│   ├── login.html
│   ├── metodo2fa.html
│   ├── otp.html
│   ├── dashboard.html
│   ├── recuperar.html
│   ├── style.css
│   ├── app.js
│   ├── metodo2fa.js
│   ├── otp.js
│   ├── dashboard.js
│   └── recuperar.js
│
├── tests/
│   └── funcional/
│       └── login.spec.js
│
├── playwright.config.js
└── README.md
```

---

# Instalação

## Clonar o repositório

```bash
git clone https://github.com/SEU_UTILIZADOR/Banco-Digital-Kriolu.git
```

Entrar na pasta do projeto

```bash
cd Banco-Digital-Kriolu
```

---

# Instalar dependências

```bash
npm install
```

---

# Iniciar o servidor

```bash
node backend/server.js
```

ou

```bash
npm start
```

---

# Executar o Frontend

Abrir a pasta **frontend** utilizando o **Live Server** do Visual Studio Code.

O sistema ficará disponível em:

```
http://127.0.0.1:5500/frontend/login.html
```

---

# Executar os Testes

Executar todos os testes:

```bash
npx playwright test
```

Executar mostrando o navegador:

```bash
npx playwright test --headed
```

Executar apenas um ficheiro:

```bash
npx playwright test tests/funcional/login.spec.js
```

Visualizar o relatório:

```bash
npx playwright show-report
```

---

# Casos de Teste

## Testes Funcionais

- Login
- Login + OTP
- Login Biométrico
- Dashboard
- Logout
- Dispositivo confiável
- Alerta por Email
- Alerta por SMS

## Testes Negativos

- Palavra-passe incorreta
- OTP incorreto
- OTP expirado
- Biometria desativada

## Testes de API

- Login
- Validação do OTP

---

# Qualidade do Software

O projeto foi desenvolvido tendo como referência a norma **ISO/IEC 25010**, privilegiando:

- Segurança
- Fiabilidade
- Usabilidade
- Adequação Funcional
- Eficiência
- Compatibilidade
- Manutenibilidade
- Portabilidade

---

# Resultados

| Tipo de Teste | Quantidade |
|----------------|-----------:|
| Testes Funcionais | 8 |
| Testes Negativos | 4 |
| Testes API | 2 |
| **Total** | **14** |

## Resultado Final

- Testes executados: **14**
- Testes aprovados: **14**
- Testes reprovados: **0**
- Taxa de sucesso: **100%**

---

# Autor

**Tech Hard**

Projeto desenvolvido para a unidade curricular **Testes e Qualidade de Software**.

---

# Licença

Este projeto foi desenvolvido exclusivamente para fins académicos.
