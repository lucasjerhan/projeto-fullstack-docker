

## 📋 Sobre o Projeto

Este é um projeto full stack containerizado que demonstra a 
implementação de uma aplicação web moderna usando React no 
frontend, Node.js com Express no backend e MongoDB como 
banco de dados. Toda a aplicação é orquestrada usando Docker 
Compose para garantir um ambiente de desenvolvimento e 
implantação consistente.

### 🛠️ Tecnologias Utilizadas

- **Frontend**: React
- **Backend**: Node.js + Express
- **Banco de Dados**: MongoDB
- **Containerização**: Docker + Docker Compose

## 🚀 Como Executar

### Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

- [Docker](https://www.docker.com/products/docker-desktop)
- [Git](https://git-scm.com/)

### 📥 Instalação e Execução

1. Clone o repositório:
   ```bash
   git clone (https://github.com/lucasjerhan/projeto-fullstack-docker.git)
   cd PROJETOFINAL
```
2. Inicie os containers:
   
   ```
   docker compose up --build
   ```
3. Acesse a aplicação:
   
   - Frontend: http://localhost:3000
   - Backend: http://localhost:3001
## 📁 Estrutura do Projeto
```
.
├── backend/           # Servidor Node.js + Express
│   ├── src/          # Código fonte do backend
│   └── package.json  # Dependências do backend
├── frontend/         # Aplicação React
│   ├── src/         # Código fonte do frontend
│   └── package.json # Dependências do frontend
├── docker-compose.yml # Configuração dos containers
└── README.md         # Documentação do projeto
```
## 🔧 Funcionalidades
- Interface de usuário responsiva com React
- API RESTful com Node.js e Express
- Persistência de dados com MongoDB
- Containerização completa da aplicação
- Ambiente de desenvolvimento consistente
## 🤝 Contribuindo
Contribuições são sempre bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature ( git checkout -b feature/NovaFeature )
3. Faça commit das mudanças ( git commit -m 'Adiciona nova feature' )
4. Faça push para a branch ( git push origin feature/NovaFeature )
5. Abra um Pull Request
## 📝 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 👥 Autores
LUCAS JERHAN - lucasjerhan
## 📞 Contato
- LinkedIn: lucasjerhan
- Email: lucasjerhan10@gmail.com
