# API Atena

Esta é uma API baseada em Flask que fornece funcionalidades de gerenciamento de usuários com controle de acesso baseado em função.

## Funcionalidades

- Criação de usuário
- Autenticação de usuário com tokens JWT
- Controle de acesso baseado em função:
    - Administradores podem criar novos usuários e visualizar todos os usuários.
    - Usuários regulares só podem visualizar suas próprias informações.

## Estrutura do Projeto

```
/home/joash/Área de trabalho/Programa/atena-agi/
├───.gitignore
├───extensions.py
├───main.py
├───setup.py
├───.env.development
├───.env.development.example
├───requirements.txt
├───infra/
│   └───compose.yaml
├───migrations/
├───models/
│   └───user.py
├───routes/
│   ├───__init__.py
│   └───api/
│       ├───api.py
│       ├───auth/
│       │   └───auth.py
│       └───user/
│           └───user.py
├───static/
│   ├───styles.css
│   └───images/
├───templates/
│   └───index.html
└───tests/
    └───test_app.py
```

## Rodando com Docker

A maneira mais simples de executar esta aplicação é usando Docker. O `docker-compose.yml` na raiz do projeto orquestra a API e o banco de dados.

1.  **Clone o repositório:**

    ```bash
    git clone <repository-url>
    ```

2.  **Configure as variáveis de ambiente:**

    Crie um arquivo `.env.development` no diretório raiz do projeto (você pode copiar o `.env.development.example`) e preencha as variáveis:

    ```
    POSTGRES_USER=admin
    POSTGRES_PASSWORD=admin
    POSTGRES_DB=atena
    JWT_SECRET_KEY=sua-chave-super-secreta
    ```

3.  **Inicie a aplicação:**

    Use o comando `docker compose up --build` para construir as imagens e iniciar os contêineres.

    ```bash
    docker compose up --build
    ```

    A aplicação estará disponível em `http://127.0.0.1:5000`.

    > **Nota sobre o Comando**
    > *   Em sistemas Linux e versões mais recentes do Docker, o comando é `docker compose` (com espaço).
    >   *   Em sistemas Windows ou com versões mais antigas do Docker, o comando pode ser `docker-compose` (com hífen).

4.  **Para parar a aplicação:**

    Pressione `Ctrl+C` no terminal ou execute o comando abaixo em outro terminal:
    ```bash
    docker compose down
    ```

## Endpoints da API

### Autenticação

-   `POST /login`

    Autentica um usuário e retorna um token JWT.

    **Corpo da requisição:**

    ```json
    {
        "email": "usuario@exemplo.com",
        "senha": "senha"
    }
    ```

### Gerenciamento de Usuários

-   `POST /api/user`

    Cria um novo usuário. Requer privilégios de administrador.

    **Corpo da requisição:**

    ```json
    {
        "nome": "novousuario",
        "email": "novousuario@exemplo.com",
        "senha": "senha",
        "role": "user" // opcional, o padrão é 'user'
    }
    ```

-   `GET /api/users`

    Retorna uma lista de todos os usuários. Requer privilégios de administrador.

-   `GET /api/user/<user_id>`

    Retorna as informações de um usuário específico. Administradores podem visualizar qualquer usuário, enquanto usuários regulares só podem visualizar suas próprias informações.

### Respostas

-   `POST /api/resposta`

    Recebe um email e uma mensagem, debita um token de tentativa do usuário e retorna uma resposta contextual ou aleatória.

    **Corpo da requisição:**

    ```json
    {
        "email": "usuario@exemplo.com",
        "mensagem": "Qualquer texto aqui"
    }
    ```

### Administração

-   `POST /api/admin/reset`

    Executa uma ação de reset no sistema. Requer privilégegos de administrador (role 'admin' e id 1).

    **Header de Autorização:**

    ```
    Authorization: Bearer <seu_token_jwt>
    ```