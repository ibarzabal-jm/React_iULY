const express = require('express');
const cnn = require('../cnn');
const router = express.Router();

//quiero traer datos de mucama, su mail, nombre, apellido, nacionalidad, nacimiento, celular
router.get('/', (req,res) => {

    let sql= `SELECT usuario_id, usuario_dni AS dni, usuario_mail AS mail, usuario_nombre AS nombre, usuario_apellido AS apellido, usuario_nacionalidad AS nacionalidad, usuario_nacimiento AS nacimiento, usuario_imagen AS foto,
                    mucama_id, DATE_FORMAT(mucama_fecha_alta, "%d/%m/%Y") AS alta, mucama_cant_referencias AS referencias, mucama_calificacion AS calificacion, mucama_puntualidad AS puntualidad, mucama_velocidad AS velocidad, mucama_calidad AS calidad, mucama_trato AS trato             
              FROM mucamas,usuarios 
              WHERE (usuario_id = mucama_usuario_id AND mucama_activo=1)
              `
    cnn.query(sql,
        function(err, result, fields){
                if (err) throw err;
                

                res.json(result);
                
        }
    );
} );






router.get('/:id', (req, res) => {

    let sql= `SELECT usuario_id, usuario_dni AS dni, usuario_mail AS mail, usuario_nombre AS nombre, usuario_apellido AS apellido, usuario_nacionalidad AS nacionalidad, usuario_nacimiento AS nacimiento, usuario_imagen AS foto,
                    mucama_id, mucama_fecha_alta, mucama_cant_referencias, mucama_calificacion, mucama_puntualidad, mucama_velocidad, mucama_calidad, mucama_trato             
              FROM mucamas,usuarios 
              WHERE (mucama_id=` + req.params.id +` AND usuario_id=mucama_usuario_id AND mucama_activo=1)
              `
    
    cnn.query(sql,
                    function (err, result, fields){
                        if ( err ) throw err;
                        res.json(result[0]);
                    }
                )

} );




router.put('/:id', (req, res) => {
    
    let sql = `UPDATE mucamas
               SET  mucama_calificacion = ?,
                    mucama_puntualidad = ?
              
                WHERE mucama_id = ?`;

    let params = [
                   req.body.calificacion,
                   req.body.puntualidad,
                   req.params.id
                 ]

    cnn.query( sql, params, function(err, result, fields){

        let respuesta;

        if( err ){
            respuesta = {
                            status: 'error',
                            message: 'Error al modificar la informacion de mucama'
                        }
        }
        else{
            respuesta = {
                status: 'ok',
                message: 'La mucama se modifico con exito'
            }
        }

        res.json(respuesta);

    } )

} );



module.exports = router;