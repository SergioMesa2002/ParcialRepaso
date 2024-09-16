const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const indexRouter = require('./routes/index');

// Configuramos el motor de vistas y el uso de EJS
app.set('view engine', 'ejs');

// Configuramos el middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Rutas
app.use('/', indexRouter);

// Inicializamos el servidor
app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
