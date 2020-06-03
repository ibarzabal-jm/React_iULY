//localHostURL
process.env.BASE_URL   = 'http://localhost:8888/';
process.env.IMAGES_URL = process.env.BASE_URL + 'images/';

const express = require('express');
const auth = require('./auth');
const cors= require('cors');

//Sessiones
const session = require('express-session');
const FileStore = require('session-file-store')(session);

//bodyparser
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

//rutas de inicio de sesion
const sessionRoutes = require('./routes/session_routes');

//rutas de base de datos
const crearUsuarioRoutes = require('./routes/crear_usuario_routes');
const usuariosRoutes = require('./routes/usuarios_routes');
const mucamaRoutes = require('./routes/mucama_routes');
const clienteRoutes = require('./routes/cliente_routes');
const pedidosRoutes = require('./routes/pedidos_routes');

//ruta de fotos
const fotoRoutes = require('./routes/foto_usuario');


const app = express();

app.use(bodyParser.urlencoded( {extended: false} ));
app.use(bodyParser.json());
app.use(fileUpload());

app.use('*/images', express.static('public/images'));


app.use(session({

    store: new FileStore,
    secret:'Si no existe la memoria todo lo nuestro es suicida 87',
    resave:false,
    saveUninitialized: true,
    name:'iULY'

    })
)




app.use(cors( {
    credentials: true,
    origin: 'http://localhost:3000',
    allowedHeaders:['Content-Type']
})
);

//autorizaciones
app.use('/auth', sessionRoutes);

//rutas
app.use('/registro', crearUsuarioRoutes);
app.use('/perfilFoto',auth, fotoRoutes);
app.use('/usuarios',  usuariosRoutes);
app.use('/clientes',  clienteRoutes);
app.use('/mucamas', mucamaRoutes);
app.use('/pedidos', pedidosRoutes)


app.listen(8888, () => {console.log('Escuchando a iULY...'); } );