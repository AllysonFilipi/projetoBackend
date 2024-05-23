# ToDo App

Um aplicativo simples de lista de tarefas usando React no frontend e Node.js com Express no backend. O app permite adicionar, atualizar, marcar como concluída e excluir tarefas. As tarefas são armazenadas em um banco de dados MongoDB.

## Funcionalidades

- Adicionar uma nova tarefa com uma data associada.
- Atualizar o texto e a data de uma tarefa existente.
- Marcar uma tarefa como concluída.
- Excluir uma tarefa.
- Exibir uma lista de tarefas com suas datas e status de conclusão.

## Tecnologias Utilizadas

### Frontend

- React
- CSS (para estilização)

### Backend

- Node.js
- Express
- MongoDB
- Mongoose

## Instalação

### Pré-requisitos

- Node.js instalado
- MongoDB Atlas ou servidor MongoDB local
- Yarn ou npm


## Instalação

Instale todo-app-express-backend com npm

```bash
  npm install todo-app-express-backend
  cd todo-app-express-backend
```
    
## Deploy

Para fazer o deploy desse projeto rode

```bash
  npm run deploy
```


## Stack utilizada

**Back-end:** Node, Express e MongoDB


## Documentação da API

#### Retorna todas as tarefas

```http
  GET /
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `` | `` |  |

#### Salva uma tarefa

```http
  POST /save
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `text`      | `string` | **Obrigatório**. O título da tarefa que você quer |

#### Atualiza uma tarefa

```http
  POST /update
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `_id`      | `string` | **Obrigatório**. O ID da tarefa que você quer |
| `text`      | `string` | **Obrigatório**. O título da tarefa que você quer |

#### Apaga uma tarefa

```http
  POST /delete
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `_id`      | `string` | **Obrigatório**. O ID da tarefa que você quer |

## Apêndice

Coloque qualquer informação adicional aqui


## Referência

 - [Full Stack ToDo App | Node, React, Express, MongoDB Tutorial](https://thebravecoders.com/full-stack-todo-app)
 