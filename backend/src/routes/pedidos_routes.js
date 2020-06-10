const express = require('express');
const cnn = require('../cnn');
const router = express.Router();

router.get('/', (req,res) => {

    let sql= `SELECT usuario_id, usuario_nombre As nombre,
                    clientes_id, clientes_cantidad_visitas AS cantidad_pedidos, clientes_valoracion_promedio AS valoracion, clientes_buen_trato AS trato, clientes_tiene_materiales AS materiales, clientes_strikes AS strikes,
                    pedidos_id, pedidos_clientes_id, periodo_id, pedidos_hora_inicio AS hora_inicio, pedidos_cantidad_horas AS cantidad_horas, DATE_FORMAT(pedidos_fecha_de_inicio, "%d/%m/%Y") AS fecha_inicio, dia_id AS dia, pedidos_libre AS libre
                FROM clientes, usuarios, pedidos
                WHERE (usuario_id = clientes_usuario_id AND pedidos_clientes_id = clientes_id AND pedidos_libre = 1)
              `
    cnn.query(sql,
        function(err, result, fields){
                if (err) throw err;
                

                res.json(result);
                
        }
    );
} );

//mandar todos los pedidos de un usuario
router.get('/user/:id', (req, res) => {

    let sql=`SELECT usuario_id, usuario_nombre As nombre,
                    clientes_id, clientes_cantidad_visitas AS cantidad_pedidos, clientes_valoracion_promedio AS valoracion, clientes_buen_trato AS trato, clientes_tiene_materiales AS materiales, clientes_strikes AS strikes,
                    pedidos_id, pedidos_clientes_id, periodo_id, pedidos_hora_inicio AS hora_inicio, pedidos_cantidad_horas AS cantidad_horas, DATE_FORMAT(pedidos_fecha_de_inicio, "%d/%m/%Y") AS fecha_inicio, dia_id AS dia, pedidos_libre AS libre
                FROM clientes, usuarios, pedidos
                WHERE (pedidos_clientes_id = ` + req.params.id +` AND usuario_id = clientes_usuario_id AND pedidos_clientes_id = clientes_id)`

    cnn.query(sql,
        function(err, result, fields){
                if (err) throw err;

                res.json(result);
                
        }
    );
} );


router.post('/', (req,res) => {

    let clienteID = 0;

    let sqlCliente=`SELECT clientes_id FROM clientes WHERE clientes_usuario_id =${req.session.userId}`
    cnn.query(sqlCliente,
        function(err,result,fields){
            if( err ){
                res.json(
                    {
                        status:'Error',
                        message:'No se pudo traer tu numero de Cliente'
                    }
                )
            }else{
                clienteID = result[0].clientes_id;

                let sql=`INSERT INTO pedidos(   pedidos_clientes_id,
                                                periodo_id,
                                                pedidos_renovacion_automatica,
                                                dia_id,
                                                pedidos_hora_inicio,
                                                pedidos_cantidad_horas,
                                                pedidos_fecha_de_inicio,
                                                pedidos_libre)
                                                
                                    Values  (   ${clienteID},
                                                ${req.body.periodo},
                                                ${req.body.renovacion},
                                                ${req.body.dia},
                                                ${req.body.hora},
                                                ${req.body.cantidad},
                                                ${req.body.fecha_inicio},
                                                1  )`
            
                cnn.query(sql,
                    function(err,result,fields){
                        if( err ){
                            res.json(
                                {
                                    status:'Error',
                                    message:'No se pudo crear el pedido'
                                }
                            )
                        }else{
                            res.json(
                                {
                                    status:'ok',
                                    message:'Se creo el pedido'
                                }
                            )
                        }
                    })
            }
        })

})







module.exports = router;