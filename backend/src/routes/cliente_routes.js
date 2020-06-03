const express = require('express');
const cnn = require('../cnn');
const router = express.Router();


router.get('/', (req,res) => {
    let sql=`SELECT usuario_id, usuario_dni AS dni, usuario_mail AS mail, usuario_nombre AS nombre, usuario_apellido AS apellido, usuario_nacionalidad AS nacionalidad, usuario_nacimiento AS nacimiento, usuario_imagen AS foto,
                    clientes_id, clientes_cantidad_visitas AS cantidad_pedidos, clientes_valoracion_promedio AS valoracion, clientes_buen_trato AS trato, clientes_tiene_materiales AS materiales, clientes_strikes AS strikes, clientes_activo As activo, clientes_bloqueado AS bloqueado

             FROM clientes, usuarios
             WHERE (usuario_id = clientes_usuario_id)
    `

    cnn.query(sql,
        function(err, result, fields){
                if (err) throw err;

                res.json(result);
                
        }
    );
} );

router.get('/:id', (req, res) => {

    let sql=`SELECT usuario_id, usuario_dni AS dni, usuario_mail AS mail, usuario_nombre AS nombre, usuario_apellido AS apellido, usuario_nacionalidad AS nacionalidad, usuario_nacimiento AS nacimiento, usuario_imagen AS foto,
                    clientes_id, clientes_cantidad_visitas AS cantidad_pedidos, clientes_valoracion_promedio AS valoracion, clientes_buen_trato AS trato, clientes_tiene_materiales AS materiales, clientes_strikes AS strikes, clientes_activo As activo, clientes_bloqueado AS bloqueado

             FROM clientes, usuarios
             WHERE (usuario_id = clientes_usuario_id AND clientes_id=` + req.params.id +`)
    `
    
    cnn.query(sql,
                    function (err, result, fields){
                        if ( err ) throw err;
                        res.json(result[0]);
                    }
                )

} );




module.exports = router;