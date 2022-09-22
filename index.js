const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const {logErrors, errorHandler, boomErrorHandler} = require('./middlewares/error.handler')

const app = express();
const port = 3000;

app.use(express.json()); //para que me muestre la info en formato json
app.use(cors());//para que el frond end pueda renderisar mi api

routerApi(app);//ejecuto la app
//errores que se van a ejecutar y el orden que se ejecutan
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Mi port' +  port);
});
