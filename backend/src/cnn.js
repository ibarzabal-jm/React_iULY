const mysql = require('mysql');

let conexion = mysql.createConnection(
    {
        host:'localhost',
        user: 'root',
        password: '',
        database: 'iuly_bd'
        
    }
);

conexion.connect(
        function(err){
            if(err) throw err;
            
            
            console.log("Conectado a IulyBD");
        }
);

module.exports = conexion;