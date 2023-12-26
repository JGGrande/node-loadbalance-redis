# Projeto API Escalável com Clean Architecture, SOLID, Node.js, NGINX, Docker, Redis e PostgreSQL

Este projeto é uma estrutura de API escalável e poderosa que utiliza conceitos de Clean Architecture, SOLID, Node.js, NGINX, Docker, Redis e PostgreSQL. A arquitetura foi projetada para suportar muitos usuários simultâneos, promovendo alta disponibilidade e desempenho.

## Configuração do Ambiente

### Pré-requisitos

- Node.js
- Docker
- Docker Compose
- Redis
- PostgreSQL

### Configuração do Docker

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio
   ```
2. Configure o número de clusters nas variáveis de ambiente do Docker conforme necessário.

3. Subindo contâiners e escalando o número de instâncias do Node.js:

   ```bash
   docker-compose up --scale nodejs=3
   ```

## Testes

Para realizar testes de usuários simultâneos consultando o banco de dados, execute dentro do contâiner node:

```bash
yarn dev:test
```

### Teste de Carga

Para realizar testes de carga, certifique-se de ter Python instalado. Em seguida, instale as dependências e execute o script de teste de carga:

```bash
pip3 install -r ./tests/requirements.txt
python3 ./tests/stress.py
```

> **Observação:** Certifique-se de que a API esteja online antes de executar os testes.

## Inserções Assíncronas no Banco de Dados usando Redis

O projeto também inclui uma funcionalidade de inserções no banco de dados de forma assíncrona usando Redis. Este exemplo pode ser encontrado na branch `AsyncInsert`. Porém, observe que essa prática é apenas um exemplo e não é recomendada para criação de contas de usuários em muitos casos.
