# Audit Center :office:

Esse projeto foi desenvolvido para o projeto do TCESP da FIAP dos alunos dos 3 anos de Sistemas de Informção.

Grupo:
```
  - Gabriel Oliveira Lima RM: 83004
  - José Paulo Petrolio RM: 83997
  - Marcello Maia Garcia RM: 83982
  - Higor Hotz Vasconcelos RM: 82031
```

## Link para a documentação: :book:

[Documentation](https://sour-chili-720.notion.site/API-Modelagem-49b5741d0c7f4fafb8b077b44917d78e)

----

## Como rodar o projeto  :rocket:

É recomendado o uso do Docker neste projeto, ja que o seu banco de dados e a aplicação estão em containers.

## 1 Passo -

Clone o repositório para sua máquina e rode o comando `yarn install` ou `npm install` para instalar as dependências desse projeto.

### 2 Passo -

Com as dependencias instaladas agora, rode o comando yarn ```yarn dc:up```, este comando irá criar os containers do docker e ja deixar eles rodando.

### 3 Passo -

Por ultilizarmos o TypeORM para o desenvolvimento da manipulacao do banco de dados, precisamos rodar as ```migrations``` do banco de dados.

Para isso, rode o comando ```yarn mg:dev```.

### 4 Passo -

Agora você pode rodar o comando para adicionar as seeds ao banco de dados, basta rodar o comando ```yarn seeds```, isso incluirá as informações das seeds nos bancos.

### 5 Passo -

Após finalizar esses passos, você já pode testar a API juntamente com o [Front-End](https://github.com/highotz/tcespFront).


PS: _Este projeto esta rodando apenas localmente, não conseguimos fazer o deploy para o back-end_
