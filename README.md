proyecto 4 Data WareHouse.

Paquetes instalados:
@fortawesome/fontawesome-svg-core
@fortawesome/free-solid-svg-icons
@fortawesome/react-fontawesome
sequelize
mysql2
jsonwebtoken
express
cors
nodemon

los paquetes de react por defecto al inicializar el proyecto, con el comando:
create-react-app dwh.

Base de datos es MySql( MySQL Workbench).

Se utilizó: javascript, React.js, Css, Node.js, Html.

Crear BD Manual:

En la carpeta BD existe un archivo con nombre (Plantilla BD.sql), contiene todas  las sentencias SQL de toda la base de datos, este archivo se ejecuta en su totalidad en el programa de MySQL Workbench.
Ejecutar proyecto:

La pagina esta creada bajo el editor Visual Code, en la terminal llegar al directorio "\dwh" en este punto ejecutar "code ."
este proyecto se ejecuta con dos terminales la cual, con el puerto 3001 es para el Backend y 3000 para el Frontend.
En una de las terminales se ejecuta el siguiente comando: npx nodemon src/assets/Script/Backend/Endpoint.js Donde "src/assets/Script/Backend/Endpoint.js" es la ruta donde esta el
archivo del Backend.

En la otra terminal el comando : npm start, la cual ejecuta React.
React abrira la pagina principal la cual sera loguin, en este caso se creo uno, usuario: Admin, pass: 1234.
con este, entrarias como administrador. ya desde este perfil puedes ingresar Usuarios, Region/Pais, Empresas, Contactos.
si quieres ver los privilegios de administrador y de ususario, solo tienes que crear un Usuario con rol(User). en este punto puedes iniciar la pagina de neuvo ó en la barra de dirrecciones solo dejar http://localhost:3000/ con esto la pagina llegara nuevamente al loguin.

---

Informacion del proyecto de react.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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
