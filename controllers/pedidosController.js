const Pedidos = require('../models/Pedidos');

exports.nuevoPedido = async (req, res, next)=>{
    const pedido = new Pedidos(req.body);
    try {
        await pedido.save();
        res.json({mensaje:'Se agrego un nuevo pedido'});
    } catch (error) {
        console.log(error)
        next();
    }
}

//muestra todos los pedidos
exports.mostrarPedidos = async (req, res, next) => {
    try {
        const pedidos = await Pedidos.find({}).populate('cliente').populate({
            path:'pedido.producto',
            model: 'Productos'//donde voy a buscar la referencia y en que modelo
        });

        res.json(pedidos);
    } catch (error) {
        console.log(error)
        next();
        
    }
}

//muestra un pedido por su ID
exports.mostrarPedido = async (req, res, next) =>{
    const pedido = await Pedidos.findById(req.params.idPedido).populate('cliente').populate({
        path:'pedido.producto',
        model: 'Productos'//donde voy a buscar la referencia y en que modelo
    });

    if(!pedido){
        res.json({mensaje :'Ese numero de pedido no existe'});
        return next();
    }
        //mostrar el pedido
        res.json(pedido);
    
}

//Actualiza un pedido por su ID
exports.actualizarPedido = async (req, res, next) =>{
    try {
        let pedido = await Pedidos.findOneAndUpdate({_id : req.params.idPedido}, req.body, {
            new : true
        })
        .populate('cliente')
        .populate({
            path:'pedido.producto',
            model: 'Productos'//donde voy a buscar la referencia y en que modelo
        });

        res.json(pedido);
    } catch (error) {
        console.log(error);
        next();
    }
}

//Eliminar pedido
exports.eliminarPedido = async (req, res, next)=> {
    try {
        await Pedidos.findOneAndDelete({_id : req.params.idPedido});
        res.json({ mensaje: 'El pedido se ha eliminado'})
    } catch (error) {
        console.log(error)
        next();
    }
}