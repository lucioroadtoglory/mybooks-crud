# Projeto de CRUD de Livros com Express, Handlebars e MySQL
Este é um projeto que implementa um CRUD (Create, Read, Update, Delete) simples para gerenciar informações de livros. A aplicação utiliza as seguintes tecnologias:

Express: Um framework web para Node.js que facilita a criação de aplicativos web e APIs.
Handlebars: Um mecanismo de template para renderização de páginas HTML dinâmicas.
MySQL: Um sistema de gerenciamento de banco de dados relacional para armazenamento de informações.
Funcionalidades
O projeto possui as seguintes funcionalidades básicas:

Listar Livros: A página inicial apresenta uma lista de livros armazenados no banco de dados, exibindo detalhes como título, autor e gênero.

Adicionar Livro: Os usuários podem adicionar informações de novos livros, incluindo título, autor e gênero, através de um formulário de adição.

Editar Livro: É possível editar as informações de um livro existente, permitindo atualizar detalhes como título, autor e gênero.

Remover Livro: Os usuários têm a opção de remover um livro do banco de dados, excluindo permanentemente suas informações.

Instruções de Uso
Instalação de Dependências: Antes de executar o projeto, certifique-se de instalar as dependências necessárias. Utilize o seguinte comando: npm install

Configuração do Banco de Dados: Edite o arquivo config.js para configurar as informações de conexão com o banco de dados MySQL.

Inicialização do Servidor: Inicie o servidor utilizando o seguinte comando: npm start

Acesso à Aplicação: Acesse a aplicação em seu navegador utilizando o endereço http://localhost:3000. Você será direcionado para a página inicial onde poderá listar, adicionar, editar e remover livros.

Estrutura do Projeto
app.js: Arquivo principal da aplicação, contendo a configuração do Express e definição das rotas.
routes.js: Arquivo onde as rotas da aplicação são definidas.
controllers/: Pasta que contém os controladores das rotas.
views/: Pasta onde os arquivos Handlebars para renderização das páginas são armazenados.
public/: Pasta que contém arquivos estáticos como CSS, imagens, etc.
models/: Pasta que abriga as definições dos modelos para interação com o banco de dados MySQL.
config.js: Arquivo onde as configurações do banco de dados são definidas.
Conclusão
Este projeto demonstra um CRUD básico para gerenciar informações de livros, utilizando Express, Handlebars e MySQL. Ele pode ser estendido e melhorado com recursos adicionais, como autenticação de usuário, validação de entrada e mais. Sinta-se à vontade para explorar e modificar o código de acordo com suas necessidades.

