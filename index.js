//para iniciar es mongod y npm start
// mogod 
// npm --save shortid multer // para evitar duplicados

const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Cors permite que un cliente se conecte a otro servidor para el intercambio de recursos
const cors = require('cors');
//aqui se conecta mongo
mongoose.Promise =global.Promise;
mongoose.connect('mongodb://localhost/restapis',{
    useNewUrlParser:true
});

//aqui se crea el servidor
const app = express();

//Habilitar body parser// para leer los valores que pasamos en postman
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//habilitar cors
app.use(cors());

//Rutas de la app
app.use('/', routes());

//carpeta publica
app.use(express.static('uploads'));

//este es el puerto con el que se va a comunicar
app.listen(5000);

