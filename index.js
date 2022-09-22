const express = require('express');
const routerApi = require('./routes');

const {logErrors, errorHandler, boomErrorHandler} = require('./middlewares/error.handler')

const app = express();
const port = 3000;

app.use(express.json()); //para que me muestre la info en formato json


routerApi(app);//ejecuto la app
//errores que se van a ejecutar y el orden que se ejecutan
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Mi port' +  port);
});
