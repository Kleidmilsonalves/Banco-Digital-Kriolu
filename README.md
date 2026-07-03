# 🏦 Banco Digital Kriolu

## Sprint Mission 1 – Sistema de Autenticação Segura

### Grupo I

Projeto desenvolvido no âmbito da unidade curricular **Testes e Qualidade de Software**, com o objetivo de implementar um sistema de autenticação seguro para o Banco Digital Kriolu.

---

# 📌 Objetivo

Desenvolver um sistema de autenticação que permita aumentar a segurança das contas bancárias através da implementação de:

- Login com utilizador e palavra-passe;
- Autenticação em dois fatores (2FA);
- Autenticação biométrica;
- Reconhecimento de dispositivos confiáveis;
- Alertas de segurança por Email;
- Alertas de segurança por SMS.

---

# 🚀 Tecnologias Utilizadas

## Frontend

- HTML5
- CSS3
- JavaScript

## Backend

- Node.js
- Express.js

## Testes

- Playwright

## Base de Dados

- JSON (users.json)

---

# 📂 Estrutura do Projeto

```
Banco-Digital-Kriolu/

│
├── backend/
│   ├── server.js
│   ├── users.json
│   ├── package.json
│   └── tests/
│
├── frontend/
│   ├── login.html
│   ├── metodo2fa.html
│   ├── otp.html
│   ├── dashboard.html
│   ├── recover.html
│   ├── style.css
│   └── *.js
│
└── README.md
```

---

# 🔐 Funcionalidades

## Login

- Autenticação com utilizador e palavra-passe.

---

## Autenticação 2FA

Após o login o utilizador escolhe receber o código OTP por:

- Email
- SMS

---

## Código OTP

- Código de 6 dígitos.
- Validade de 30 segundos.
- Validação antes do acesso ao Dashboard.

---

## Dashboard

Apresenta:

- Nome
- Saldo
- Email
- Telefone
- Histórico
- Último acesso

---

## Logout

Permite terminar a sessão do utilizador.

---

## Recuperação de Conta

Permite redefinir a palavra-passe.

---

## Autenticação Biométrica

Permite acesso direto ao Dashboard quando a biometria está ativa.

---

## Dispositivo Confiável

Permite reconhecer dispositivos previamente autorizados.

---

## Alertas

Após autenticação o sistema envia:

- Alerta por Email
- Alerta por SMS

---

# ▶️ Como Executar

## Instalar dependências

```bash
npm install
```

---

## Iniciar o servidor

```bash
node server.js
```

Servidor disponível em:

```
http://localhost:3000
```

---

## Abrir o Frontend

Abrir:

```
frontend/login.html
```

ou utilizar o Live Server do Visual Studio Code.

---

# 🧪 Testes Automatizados

Foi utilizada a framework **Playwright** para automatizar os testes do sistema.

## Executar todos os testes

```bash
npx playwright test
```

---

## Executar apenas um teste

Exemplo:

```bash
npx playwright test tests/login.spec.js
```

---

# ✅ Casos de Teste

## Testes Funcionais

- CT-01 – Login
- CT-02 – Login + OTP
- CT-03 – Login Biométrico
- CT-04 – Logout
- CT-05 – Dispositivo Confiável
- CT-06 – Alerta por Email
- CT-07 – Alerta por SMS
- CT-08 – Dashboard

---

## Testes Negativos

- NT-01 – Palavra-passe incorreta
- NT-02 – Código OTP incorreto
- NT-03 – Código OTP expirado
- NT-04 – Biometria desativada

---

## Testes API

- API-01 – POST /login
- API-02 – POST /validate-otp

---

# 📊 Resultados

| Tipo | Quantidade |
|------|-----------:|
| Testes Funcionais | 8 |
| Testes Negativos | 4 |
| Testes API | 2 |
| **Total** | **14** |

## Resultado Final

- Testes Executados: **14**
- Testes Aprovados: **14**
- Testes Reprovados: **0**

**Taxa de Sucesso: 100%**

---

# 📈 Métricas de Qualidade

| KPI | Resultado |
|------|----------:|
| Taxa de Sucesso | **100%** |
| Taxa de Defeitos | **28,57%** |
| Cobertura de Testes | **100%** |

---

# 🔒 Requisitos Implementados

- Login Seguro
- Autenticação 2FA
- Recuperação de Conta
- Dashboard
- Logout
- Autenticação Biométrica
- Dispositivo Confiável
- Alertas por Email
- Alertas por SMS

---

# 👥 Grupo

**Grupo I**

Sprint Mission 1

Banco Digital Kriolu

Universidade de Santiago

Curso de Engenharia Informática

Ano Letivo 2025/2026

---

# 📌 Conclusão

O projeto Banco Digital Kriolu implementa um sistema de autenticação seguro baseado em múltiplas camadas de proteção, incluindo autenticação em dois fatores, biometria e reconhecimento de dispositivos confiáveis.

Foram realizados testes funcionais, negativos e de API, todos automatizados com Playwright. No final do desenvolvimento, os **14 testes foram executados com sucesso**, demonstrando a estabilidade e o correto funcionamento da aplicação.
