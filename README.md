
#### Este é o projeto final da disciplina Linguagem de Script para WEB do Curso de Análise e desenvolvimento de Sistemas do Instituto Federal da Paraíba - Campus Cajazeiras.

#### Para este projeto, foram usadas as seguintes tecnologias: 

    HTML, CSS e JAVASCRIPT (Front-end)

    NodeJS, Express e MySQL (Backend)
    
    Ademais, foi usado o software Docker para criar um container com a imagem do MySQL.

#### No diretório 'Backend' contém um arquivo chamado '.env.example'. Ele é um arquivo modelo para variáveis de ambiente que são necessárias para rodar o projeto. Está contido todas as informações para iniciar a aplicação do Banco de Dados e a porta que será usada. 

#### O projeto usa como dependencias de desenvolvimento o Nodemon e o Eslint. Nodemon para reiniciar o servidor cada vez que uma alteração seja feita e o Eslint para manter um padrão na estrutura do código. 

#### O mesmo se divide em 3 partes: Camada mais baixa da aplicação que lida com o banco de dados (Models), camada intermediaria que lida com os roteamentos (Controllers) e a camada mais fina que é o servidor propriamente dito.