const express = require('express');
const router = express.Router();

let productos = [
    { id: 1, nombre: 'Producto 1', precio: 100, stock: 5 },
    { id: 2, nombre: 'Producto 2', precio: 200, stock: 3 },
    { id: 3, nombre: 'Producto 3', precio: 150, stock: 0 }
];

let carrito = [];

router.get('/', (req, res) => {
    res.render('index', { productos, carrito });
});

router.post('/agregar', (req, res) => {
    const productoId = parseInt(req.body.productoId);
    const productoSeleccionado = productos.find(p => p.id === productoId);

    if (productoSeleccionado && productoSeleccionado.stock > 0) {
        carrito.push(productoSeleccionado);
        productoSeleccionado.stock--;
    } else {
        res.send('No hay suficiente stock del producto.');
    }

    res.redirect('/');
});

module.exports = router;
