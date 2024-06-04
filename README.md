# Nome: Jefferson Eduardo

# Sistema de Gerenciamento de Carros HotWheels

Este é um projeto de sistema de gerenciamento de carros HotWheels, desenvolvido como parte do trabalho acadêmico para a disciplina de Desenvolvimento de Sistemas frontend na Pontifícia Universidade Católica do Rio Grande do Sul.
Primeira fase do projeto consiste em um CRUD utilizando React.

## Executando o Projeto

Para executar o projeto você pode seguir dois caminhos, o primeiro clonando o projeto direto do github ou se vc recebeu o arquivo .zip, siga os passos abaixo:
- GITHUB:
    1. Clone o repositório para o seu computador:
        ```
        git clone https://github.com/jeffhawk/hotwheels.git
        ```

    2. Navegue até o diretório do projeto:
        ````
        cd hotwheels
        ````

    3. Instale as dependências do projeto:

        ***`npm install`***


    4. Execute o projeto:

        ***`npm start`***

- Arquivo zip:
    1. Descompacte o arquivo .zip em algum diretório no seu computador:
        ```
        botão direito do mouse em cima do arquivo: hotwheels.zip
        ```
        ![](/public/zip.png)

    2. Navegue até o diretório do projeto:
        ````
        cd hotwheels
            ou
        duplo-clique na pasta hotwheels
        ````

    3. Instale as dependências do projeto:
    
        Digite: 
        ***`npm install`***

    4. Execute o projeto:
        ````
        Abra o terminal clicando com o botão direito do mouse:
        ````
        ![](/public/terminal.png)
        Digite: ***`npm start`***

O projeto será executado em `http://localhost:3000/`.

## Componentes

### Home
Exibe a tela principal apresentando o CRUD

### About
Fala sobre o CRUD e a sua finalidade.

### NotFound
Exibe informação para o usuário quando o mesmo tenta navegar por uma página e a mesma não é encontrada!

### CarList

O componente `CarList` é responsável por exibir a lista de carros cadastrados. Ele recebe uma lista de carros de um arquivo json e monta uma tabela com o conteúdo deste arquivo, cada linha da tabela exibe informações básicas como id, nome e modelo do carro. Também a cada linha são exibidos dois botões um para caso queira editar e o outro caso queira excluir o carro.


### CarForm

O componente `CarForm` é responsável por exibir o formulário de cadastro de um novo carro. Ele possui campos para inserir nome, marca, modelo e ano do carro, também exibe um botão para adicionar o carro à lista e outro para cancelar retornando ao componente Home.
Utilizei aqui o mesmo formulário para editar o carro, pois os campos são os mesmos.

### NavBar

O componente `NavBar` é responsável por exibir a barra de navegação com os links para as diferentes páginas da aplicação.


...

## Decisões de Desenvolvimento

Durante o desenvolvimento deste projeto, utilizei o useState e o useEffect para componentes funcionais.

Além disso, utilizei o React Router para gerenciar as rotas da aplicação, permitindo a navegação entre as diferentes páginas de forma simples e intuitiva. Para estilizar os componentes, utilizei o CSS modules para garantir a modularidade e reutilização do código CSS.

## Melhorias Futuras

Para melhorar este projeto no futuro, pretendo adicionar funcionalidades como a adição de imagens aos carros e a implementação de testes automatizados para garantir a qualidade do código.

