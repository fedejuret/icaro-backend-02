const path = require('path');
const fs = require('fs');

const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('<h1>Hola, estamos en la pagina principal</h1>');
});

app.get('/productos', function (req, res) {
    // __dirname => /home/fedejuret/Escritorio/icaro-backend-02/src/
    res.sendFile(path.join(__dirname, 'views/productos.html'));
});

app.get('/productos/:productoId', function (req, res) {

    const id = req.params.productoId;

    const filePath = path.join(__dirname, `views/producto${id}.html`);

    const ruta = fs.existsSync(filePath)
        ? filePath
        : path.join(__dirname, `views/error.html`);

    res.sendFile(ruta);

});

app.listen(3000)