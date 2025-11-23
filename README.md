# Atena AGI - Website

## Sobre o Projeto

Este é o site da Atena AGI, uma agência de inteligência artificial generativa fictícia. O projeto foi desenvolvido como parte da disciplina de **Auditoria de Sistemas**, do oitavo período do curso de **Sistemas de Informação**.

O objetivo principal é apresentar os serviços e a equipe da Atena, servindo como um estudo de caso prático para a aplicação dos conceitos de auditoria em um ambiente de desenvolvimento web moderno.

## API Backend

Este projeto de frontend se comunica com uma API backend desenvolvida em Flask, responsável pelo gerenciamento de usuários, autenticação e outras funcionalidades do sistema. O repositório da API pode ser encontrado em: [https://github.com/gushadd/atena-agi](https://github.com/gushadd/atena-agi)

## Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias e ferramentas:

*   **Vue.js 3:** Um framework progressivo para a construção de interfaces de usuário. Foi utilizado para criar uma aplicação de página única (SPA) reativa e componentizada.
*   **Vite:** Uma ferramenta de build moderna que oferece um ambiente de desenvolvimento extremamente rápido, com Hot-Module Replacement (HMR) instantâneo.
*   **Vue Router:** A biblioteca de roteamento oficial para Vue.js, usada para gerenciar as diferentes páginas da aplicação (Home, Sobre, Contato, etc.).
*   **JavaScript, HTML5 e CSS3:** As tecnologias fundamentais da web, utilizadas para estruturar, estilizar e adicionar interatividade ao site.

## Como Executar o Projeto

Para executar este projeto em seu ambiente local, siga os passos abaixo.

### Pré-requisitos

*   [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
*   [npm](https://www.npmjs.com/) (geralmente vem com o Node.js)

### Passos

1.  **Clone o repositório:**
    ```bash
    git clone <URL_DO_REPOSITORIO>
    cd atena-agi-front
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Execute o servidor de desenvolvimento:**
    Este comando iniciará o servidor Vite em modo de desenvolvimento, geralmente na porta `http://localhost:5173`.
    ```bash
    npm run dev
    ```

4.  **Compile para produção:**
    Para criar uma versão otimizada do site para produção, execute o comando abaixo. Os arquivos serão gerados na pasta `dist/`.
    ```bash
    npm run build
    ```