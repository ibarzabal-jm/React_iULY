const express = require('express');
const cnn = require('../cnn');
const router = express.Router();

router.post('/', (req,res) => {

    if(req.body.tipo === 'iULY'){
        req.body.tipo = 5;
    }

    if (req.body.tipo === 'cliente'){
        req.body.tipo = 4;
    }

    if(req.body.tipo == 5 || req.body.tipo == 4){

        let sql =`INSERT INTO  usuarios(usuario_dni,
                                    usuario_mail, 
                                    usuario_nombre,
                                    usuario_apellido,
                                    usuario_celular,
                                    usuario_imagen,
                                    usuario_tipo_id,
                                    usuario_bloqueado,
                                    usuario_dni_verificado,
                                    usuario_pass)
                                    
                Values (
                    '${req.body.dni}',
                    '${req.body.mail}',
                    '${req.body.nombre}',
                    '${req.body.apellido}',
                    '${req.body.celular}',
                    'http://localhost:8888/images/gato.jpg',
                    '${req.body.tipo}',
                    0,
                    0,
                    '${req.body.pass}'
                )`;

        cnn.query(sql, function(err,result,fields){
            if ( err ){
                res.json(
                    {
                        status:'error',
                        message:'Error al crear usuario'
                    }
                )
            }else{
    
                if(req.body.tipo == '5'){
    
                    let sqlmucama =`INSERT INTO  mucamas(   mucama_usuario_id,
                                                            mucama_cant_referencias,
                                                            suscripcion_id,
                                                            suscripcion_renovacion_automatica,
                                                            mucama_activo,
                                                            mucama_bloqueado)
                                        
                                    VALUES(${result.insertId}, 0,  1,   1,   1,   0 )`;
                                                    
    
                    cnn.query(sqlmucama,
                        function(err,result,fields){
                            
                            if( err ) throw err;
    
                            res.json(
                                {
                                    status:'ok',
                                    message:'Agregaste a iuly'
                                }
                            )                        
    
                        }
                        
                    );
    
                }else{
                    
                    let sqlCliente=`INSERT INTO  clientes(  clientes_usuario_id,
                                                            suscripcion_clientes_id,
                                                            suscripcion_clientes_renovacion_automatica,
                                                            clientes_cantidad_visitas,
                                                            clientes_strikes,
                                                            clientes_activo,
                                                            clientes_bloqueado)
                                    VALUES(${result.insertId}, 1, 1, 0, 0, 1, 0) `

                    cnn.query(sqlCliente,
                        function(err,result,fields){
                            if( err ){
                                res.json(
                                    {
                                        status:'Error',
                                        message:'No se pudo agregar al cliente'
                                    }
                                )
                            }else{
                                res.json(
                                    {
                                        status:'ok',
                                        message:'Se agregó al cliente'
                                    }
                                )
                            }
                        }                        
                    );
                    
                }
            }
            
            
        });

    }else{
        res.json(
            {
                status:'Error',
                message:'No sé que estas intentando SALAME'
            }
        )
    }
    

});





module.exports = router;