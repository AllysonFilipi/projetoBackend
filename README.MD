[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)


# TO-DO App Backend

Este projeto é o backend da aplicação de gerenciamento de tarefas desenvolvimendo em Node, Express e Mongoose.


## Autores

- [@renanalencar](https://www.github.com/renanalencar)


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
 