const express = require('express');
const router = express.Router();

const clienteController = require('../controllers/clienteController');
const productosController = require('../controllers/productosController');
const pedidosController = require('../controllers/pedidosController');



module.exports = function () {

    //Agrega nuevos clientes via Post
    router.post('/clientes', clienteController.nuevoCliente);

    // Obtener todos los clientes
    router.get('/clientes', clienteController.mostrarClientes);

    //muestra un cliente en especifico(id)
    router.get('/clientes/:idCliente', clienteController.mostrarCliente);


    //Aqui se actualiza el cliente
    router.put('/clientes/:idCliente', clienteController.actualizarCliente);

    //Eliminar cliente
    router.delete('/clientes/:idCliente', clienteController.eliminarCliente);


    // PRODUCTOS //
    //Nuevos productos
    router.post('/productos',
        productosController.subirArchivo,
        productosController.nuevoProducto);

    //Muestra todos los productos
    router.get('/productos', productosController.mostrarProductos);

    //Muestra un producto por su ID
    router.get('/productos/:idProducto', productosController.mostrarProducto);

    //Actualizar Productos
    router.put('/productos/:idProducto',
        productosController.subirArchivo,
        productosController.actualizarProducto
        );
        
    //Eliminar Productos
    router.delete('/productos/:idProducto', productosController.eliminarProducto);
    
    //**Pedidos**/
    //Agregar nuevos pedidos
    router.post('/pedidos', pedidosController.nuevoPedido);

    //Mostrar todos los pedidos
    router.get('/pedidos', pedidosController.mostrarPedidos);
   
    //Mostrar un pedido por su ID
    router.get('/pedidos/:idPedido', pedidosController.mostrarPedido);
    
    //actualizar pedidos
    router.put('/pedidos/:idPedido', pedidosController.actualizarPedido);

    // eliminar un pedido
    router.delete('/pedidos/:idPedido', pedidosController.eliminarPedido);
    
    return router;
}