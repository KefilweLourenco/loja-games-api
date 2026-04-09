# 🎮 API Loja de Games

API REST básica desenvolvida com NestJS, TypeORM e MySQL como atividade prática do bootcamp Generation Brasil.

---

## 🚀 Tecnologias utilizadas

* NestJS
* TypeScript
* TypeORM
* MySQL

---

## 📦 Funcionalidades

* CRUD completo de Categorias
* CRUD completo de Produtos
* Relacionamento entre Categoria e Produto (OneToMany / ManyToOne)

---

## 🗂️ Estrutura do Projeto

### Categoria

* id
* tipo
* descricao

### Produto

* id
* nome
* descricao
* preco
* quantidade
* console
* categoria

---

## 🗄️ Banco de Dados

* Nome: db_games_online
* Relacionamento:

  * Uma categoria pode ter vários produtos
  * Um produto pertence a uma categoria

---

## ⚙️ Execução do Projeto

```bash
npm install
npm run start:dev
```

A aplicação roda na porta:

```
http://localhost:4000
```

---

## 🔍 Testes

Os endpoints foram testados utilizando o Insomnia.

### Categorias

* GET /categorias
* GET /categorias/:id
* GET /categorias/tipo/:tipo
* POST /categorias
* PUT /categorias
* DELETE /categorias/:id

### Produtos

* GET /produtos
* GET /produtos/:id
* GET /produtos/nome/:nome
* POST /produtos
* PUT /produtos
* DELETE /produtos/:id

---

## 🎯 Objetivo

Projeto desenvolvido como atividade do bootcamp Generation Brasil, com foco em:

* Prática de CRUD
* Relacionamento entre entidades
* Organização em módulos no NestJS
