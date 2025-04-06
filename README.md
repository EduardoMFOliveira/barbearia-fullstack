# Barbearia Fullstack - Sistema Completo de Agendamentos

## 📝 Sobre o Projeto

Sistema profissional para barbearias desenvolvido com arquitetura fullstack moderna, oferecendo:

- Backend robusto em **Spring Boot** (Java 17)
- Frontend dinâmico em **React** (versão 18+)
- Banco de dados **MongoDB** para armazenamento flexível
- Autenticação segura com **JWT** e **Spring Security**
- Interface responsiva com **Material-UI** e **Styled Components**

## 🛠️ Stack Tecnológica

### Backend
![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)
![Spring Security](https://img.shields.io/badge/Spring_Security-6DB33F?style=for-the-badge&logo=spring-security&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)

### Frontend
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Material-UI](https://img.shields.io/badge/Material_UI-0081CB?style=for-the-badge&logo=mui&logoColor=white)
![Styled Components](https://img.shields.io/badge/Styled_Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

### DevOps
![Maven](https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apachemaven&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

## 🚀 Guia de Instalação

### Pré-requisitos
- Java JDK 17+
- Maven 3.8+
- Node.js 16+
- MongoDB 5.0+ (ou Docker)
- IDE recomendada: IntelliJ IDEA

### Configuração do Ambiente

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/barbearia-fullstack.git
cd barbearia-fullstack
```

2. **Backend (Spring Boot)**
```bash
cd barbearia-backend

# Instale as dependências
mvn clean install

# Configure o application.properties
# (Defina as credenciais do MongoDB)

# Execute com Maven
mvn spring-boot:run

# API disponível em: http://localhost:8080
# Swagger UI: http://localhost:8080/swagger-ui.html
```

3. **Frontend (React)**
```bash
cd ../barbearia-frontend

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env

# Inicie a aplicação
npm start

# Acesse: http://localhost:3000
```

## 🎯 Funcionalidades

### Core
- ✔️ Agendamento inteligente de serviços
- ✔️ Cadastro de clientes e profissionais
- ✔️ Gestão de horários e disponibilidade

### Segurança
- 🔒 Autenticação JWT com roles
- 🔐 Criptografia de dados sensíveis
- 🛡️ Proteção contra CSRF e XSS

### Admin
- 📊 Dashboard analítico
- 💰 Gestão financeira
- 📈 Relatórios personalizados

## 🤝 Contribuição

1. Fork o repositório
2. Crie sua feature branch (`git checkout -b feature/incrivel`)
3. Commit suas mudanças (`git commit -am 'Adiciona feature incrível'`)
4. Push para a branch (`git push origin feature/incrivel`)
5. Abra um Pull Request

---

Desenvolvido com ❤️ por [Eduardo] | [Github](hhttps://github.com/EduardoMFOliveira) | [LinkedIn](https://www.linkedin.com/in/eduardo-mendesfdo/)
