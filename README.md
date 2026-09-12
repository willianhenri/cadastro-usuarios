# Cadastro de Usuários

Interface web para cadastrar, listar e remover usuários. O projeto foi desenvolvido com React e consome uma API REST publicada separadamente.

## Funcionalidades

- Cadastro de nome, idade e e-mail
- Listagem dos usuários registrados
- Exclusão de usuários
- Integração com API REST via Axios
- Interface responsiva

## Tecnologias

- React 19
- Vite
- Axios
- CSS

## Como executar

### Pré-requisitos

- Node.js
- npm

Instale as dependências e inicie o servidor de desenvolvimento:

```bash
npm install
npm run dev
```

O Vite mostrará no terminal o endereço local da aplicação.

## Scripts

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o ambiente de desenvolvimento |
| `npm run build` | Gera a versão de produção |
| `npm run lint` | Executa a análise estática |
| `npm run preview` | Visualiza localmente o build |

## Integração com a API

O cliente HTTP está configurado em `src/services/api.js`. O backend relacionado está disponível no repositório [API](https://github.com/willianhenri/API).

A aplicação utiliza os endpoints `GET /user`, `POST /user` e `DELETE /user/:id`.

## Estrutura principal

```text
src/
├── assets/
├── pages/
│   └── home/
├── services/
│   └── api.js
└── main.jsx
```

## Autor

Desenvolvido por [Willian Henrique](https://github.com/willianhenri).
