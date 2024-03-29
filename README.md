# API em Nestjs com Mysql | Docker

# <a name="indice"><a/> Índice
- [Requerimentos](#requerimentos)
- [Configuração](#configuracao)
- [Dependências](#dependencias)
- [Banco de Dados](#banco)
- [Execução da Aplicação](#execucao-app)
- [Banco de Dados](#banco)
- [Rotas da Aplicação](#rotas-app)


[índice&#8613;](#indice)
### <a name="requerimentos"><a/>Requerimentos  

Requer [Node.js](https://nodejs.org/), [Typescript](https://www.typescriptlang.org/), [Nestjs](https://nestjs.com/), [Docker](https://www.docker.com/)

[índice&#8613;](#indice)
### <a name="configuracao"><a/> Configuração
Clone o projeto através desse repositório.
Edite as variáveis de ambiente no arquivo **.env** na raiz do projeto para configurar o acesso ao banco de dados.
Preencha os valores das variáveis de ambiente conforme exemplo abaixo.
##### Observação: Host no Windows
Se o sistema operacional for Windows mesmo configurando a variável ``` DATABASE_HOST ``` a maioria das vezes a mesma se mantém como localhost.

#### Variáveis de Ambiente
```sh
# DATABASE
DATABASE_TYPE=mysql
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_USER=root
MYSQL_ROOT_PASSWORD=root
MYSQL_DATABASE=nest
TZ=America/Sao_Paulo

# JWT
JWT_SECRET=secretJWT
JWT_ACCESS_TOKEN_SECRET=secretJWT
JWT_EXPIRATION_TIME=1800
```
Feito isso o programa estará pronto para ser dockerizado.
Abra o projeto através de um terminal de comando e rode o seguinte comando:

```sh
docker-compose up -d
```
Com isso projeto será dockerizado e o mesmo montará o banco de dados necessário para a aplicação e o mesmo já estará rodando no Host: http://localhost:3000

[índice&#8613;](#indice)

###  <a name="configuracao"><a/>Instalação de Dependêcias e run do sistema
Abra um terminal, na raiz do projeto, e instale as dependências. 
```sh
$ npm install
$ npm run start:dev
```
Com isso o programa estará pronto para ser usado através da url: ``` http://localhost:3000 ```

[índice&#8613;](#indice)

###  <a name="banco"><a/>Banco de Dados
Uma vez dockerizado e instalado as dependências o programa criará automaticamente todas as tabelas necessárias para o funcionamento do sistema.

### Criação de um User | Register - conferir o request body em 'http://localhost:3000/docs'

Abra o banco de dados num SGBD que preferir e via linha de comando execute o script abaixo:
```
GET: http://localhost:3000/register
```

###  <a name="execucao-app"><a/>Execução da Aplicação
---
##### Para ambiente Dev
Abra o terminal na raiz do projeto e execute:
```sh
$ npm run start:dev 
```

##### Para ambiente Prod
Em uma guia do terminal, na raiz do projeto, execute:
```sh
$ npm run start:prod 
```
----
 >O Nestjs, através do typescript, realizará a transpilação do código .ts em .js, e alocará no diretório dist na raiz do projeto. Esse é o diretório para publicação.
 ----
 >O Nestjs, está preparado para se trabalhar com o TypeORM e ao rodar a aplicação toda a estrutura de tabelas será criada automaticamente para o banco de dados
 ----
 >No ambiente de DEV, o nestjs ficará assistindo os arquivos .ts, logo a cada alteração em um arquivo .ts, e automaticamente um novo arquivo .js será gerado ou atualizado.
 ----
 >No ambiente de PROD, o nestjs gerará uma única vez o diretório dist com a transpilação dos arquivos Typescript e acionará o node para levantar a aplicação apontando para o server na raiz do dist.
---
 [índice&#8613;](#indice)
 ### <a name="rotas-app"><a/> Rotas da Aplicação em ambiente local
 ##### Host: localhost:3000
 
 [índice&#8613;](#indice)

 ##### Documentação das rotas via Swagger API em http://localhost:3000/docs 
 Aqui se encontra todas as rotas e as mesmas podem ser testadas via Insomnia/Postman
 Por favor, consultar a imagem abaixo.
 
 ![image](https://user-images.githubusercontent.com/8227278/181750954-bff1dd6d-5ee7-4786-90ee-363a87e53441.png)
 ![image](https://user-images.githubusercontent.com/8227278/181751076-84e9c0c9-db36-4d1e-8d5c-017dc92b05a4.png)
 ![image](https://user-images.githubusercontent.com/8227278/181751421-9140c02d-ab0f-420a-bed8-5087f7269342.png)
 ![image](https://user-images.githubusercontent.com/8227278/181751482-f3bce521-3400-43d0-92d4-f2157ec1267e.png)