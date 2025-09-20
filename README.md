# Lactino - Sistema de Gestão para Laticínios (Frontend)

Este é o repositório do frontend do projeto Lactino, um sistema de gestão completo desenvolvido para otimizar as operações de pequenos e médios produtores de laticínios. A aplicação foi construída com React e TypeScript, oferecendo uma interface moderna e reativa para gerenciar toda a cadeia produtiva, desde o recebimento do leite até a venda final dos produtos.

Este projeto foi desenvolvido como parte de uma iniciativa acadêmica/de aprendizado, com foco em aplicar conceitos modernos de desenvolvimento de software em uma solução prática e robusta.

## ✨ Principais Funcionalidades

O sistema conta com diversos módulos para abranger as necessidades de gestão do negócio:

* **📈 Dashboard Principal:** Uma visão geral e centralizada com os principais indicadores do negócio, como contas a pagar/receber, resumo da produção diária e alertas de produtos próximos ao vencimento.
* **🥛 Gestão de Leite e Laticínios:** Rastreabilidade completa do leite recebido e dos laticínios produzidos, com controle de lotes, datas de obtenção, produção e validade.
* **📦 Gestão de Estoque:** Controle detalhado dos insumos (ração, medicamentos, etc.), com gerenciamento de quantidade mínima, validade e status.
* **💰 Gestão de Vendas e Compras:** Módulos dedicados para registrar transações de venda e compra, com filtros avançados por cliente, fornecedor, datas e valores.
* **👥 CRM (Customer Relationship Management):** Uma área para gerenciar o cadastro de clientes, visualizar histórico de transações e fortalecer o relacionamento.
* **🔔 Sistema de Notificações:** Alertas em tempo real para eventos importantes, como insumos abaixo do estoque mínimo ou produtos perto de vencer.
* **🔐 Autenticação e Perfil de Usuário:** Sistema seguro de login, cadastro e redefinição de senha, além de um painel de perfil onde o usuário pode editar seus dados.
* **📄 Geração de Relatórios:** Funcionalidade para visualizar e exportar relatórios detalhados de cada transação.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando um conjunto de tecnologias modernas para o desenvolvimento web:

* **Frontend:**
    * [React](https://react.dev/)
    * [TypeScript](https://www.typescriptlang.org/)
    * [Vite](https://vitejs.dev/) como bundler
    * [React Router DOM](https://reactrouter.com/) para gerenciamento de rotas
    * [Axios](https://axios-http.com/) para requisições HTTP
    * [TanStack Table](https://tanstack.com/table/) para criação de tabelas complexas e dinâmicas
    * [React Toastify](https://fkhadra.github.io/react-toastify/introduction) para notificações
* **Estilização:**
    * CSS puro com BEM (Block, Element, Modifier) e variáveis CSS para um design consistente.

## ⚙️ Como Executar o Projeto Localmente

Para rodar este projeto em sua máquina local, siga os passos abaixo.

### **Pré-requisitos**

* Você precisa ter o [Node.js](https://nodejs.org/) (versão 18 ou superior) instalado.
* Um gerenciador de pacotes como [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/).

### **Instalação**

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/lactino-frontend.git](https://github.com/seu-usuario/lactino-frontend.git)
    ```

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd lactino-frontend
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

### **Rodando a Aplicação**

Com as dependências instaladas, você pode iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em http://localhost:5173 (ou em outra porta, caso a 5173 esteja em uso).

## Conectando com o Backend

O projeto está configurado para se comunicar com o backend hospedado no Render através de um proxy no Vite. Nenhuma configuração adicional é necessária para o desenvolvimento local.
