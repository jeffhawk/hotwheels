# Sistema de Gerenciamento de Carros HotWheels

Este é um projeto de sistema de gerenciamento de carros HotWheels, desenvolvido como parte de um trabalho acadêmico.

## Executando o Projeto

Para executar o projeto, siga os passos abaixo:

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


O projeto será executado em `http://localhost:3000/`.

## Componentes

### CarList

O componente `CarList` é responsável por exibir a lista de carros cadastrados. Ele recebe uma lista de carros como propriedade e utiliza o componente `CarItem` para exibir cada carro individualmente.

### CarForm

O componente `CarForm` é responsável por exibir o formulário de cadastro de um novo carro. Ele possui campos para inserir a marca, modelo e ano do carro, e um botão para adicionar o carro à lista.

### NavBar

O componente `NavBar` é responsável por exibir a barra de navegação com os links para as diferentes páginas da aplicação.

...

## Decisões de Desenvolvimento

Durante o desenvolvimento deste projeto, optei por utilizar o React para a construção da interface do usuário devido à sua facilidade de uso e capacidade de criar interfaces interativas de forma eficiente. Para o gerenciamento do estado da aplicação, utilizei o useState e o useEffect para componentes funcionais, e o useContext e o useReducer para componentes que precisam compartilhar estado entre si.

Além disso, utilizei o React Router para gerenciar as rotas da aplicação, permitindo a navegação entre as diferentes páginas de forma simples e intuitiva. Para estilizar os componentes, utilizei o CSS modules para garantir a modularidade e reutilização do código CSS.

## Melhorias Futuras

Para melhorar este projeto no futuro, pretendo adicionar funcionalidades como a edição e exclusão de carros, a adição de imagens aos carros e a implementação de testes automatizados para garantir a qualidade do código.





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
