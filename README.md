
### Este é o projeto final da disciplina Linguagem de Script para WEB do Curso de Análise e desenvolvimento de Sistemas do Instituto Federal da Paraíba - Campus Cajazeiras.

#### Para este projeto, foram usadas as seguintes tecnologias: 

    HTML, CSS e JAVASCRIPT (Front-end)

    NodeJS, Express e MySQL (Backend)
    
    Ademais, foi usado o software Docker para criar um container com a imagem do MySQL.

#### No diretório 'Backend' contém um arquivo chamado '.env.example'. Ele é um arquivo modelo para variáveis de ambiente que são necessárias para rodar o projeto. Está contido todas as informações para iniciar a aplicação do Banco de Dados e a porta que será usada. 

#### O projeto usa como dependencias de desenvolvimento o Nodemon e o Eslint. Nodemon para reiniciar o servidor cada vez que uma alteração seja feita e o Eslint para manter um padrão na estrutura do código. 

#### O mesmo se divide em 3 partes: Camada mais baixa da aplicação que lida com o banco de dados (Models), camada intermediaria que lida com os roteamentos (Controllers) e a camada mais fina que é o servidor propriamente dito.

### Requisitos: 
    Database Client, Docker (ADD-ON's p/VS code)
    Docker v24.0.2 ou superior com permissão de root
    NodeJS v16.14 ou superior.
    Dotenv v16.3.1
    express v4.18.2
    mysql2 v3.4.1

## Como iniciar o projeto:
#### Após instalar todas as dependencias acima, será necessario baixar a imagem do MySQL para o docker usando o seguinte comando 
    docker run --name mysql -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 -d mysql
#### Feito isso, verifique na extensão do docker se o container foi baixado. Ou, se preferir dê o seguinte comando:
    docker ps
#### Com o container instalado, dê o seguinte comando: 
    docker start mysql
#### Abra a extensão Database Cliente e se conecte com o container MySQL. Para isso, digite a senha que foi definida no momento do download da imagem. Nesse caso, 'root'. Ao se conectar, rode o arquivo 'create-db-template.sql'. Esse arquivo irá criar uma tabela chamada 'partidas' no servidor.
