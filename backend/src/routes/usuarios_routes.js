const express = require('express');
const cnn = require('../cnn');
const router = express.Router();


router.get('/', (req,res) => {
    cnn.query("SELECT * FROM usuarios",
        function(err, result, fields){
                if (err) throw err;
 

                res.json(result);
                
        }
    );
} );

router.get('/:id', (req,res) => {

    sql = `SELECT *, DATE_FORMAT(usuario_nacimiento, "%Y-%m-%d") AS nacimiento
            FROM usuarios
            WHERE (usuario_id = `+ req.params.id +` )`

    cnn.query(sql,
        function(err, result, fields){
                if (err) throw err;

                res.json(result[0]);
                
        }
    );
} );

router.put('/:id', (req,res) =>{

    
    let sqlUpdate= `UPDATE usuarios
                        SET usuario_nacimiento   = ?,
                            usuario_nacionalidad = ?,
                            usuario_celular      = ? `;
    let values =[
                    req.body.nacimiento,
                    req.body.nacionalidad,
                    req.body.celular,
                ];


    if(req.body.verificado){
        sqlUpdate += ', usuario_dni_verificado = ?';
        values.push(req.body.verificado);
    }

    sqlUpdate += ' WHERE usuario_id = ?';
    values.push(req.session.userId);


    cnn.query(sqlUpdate, values,
        function (err , result, fields){
            let respuesta;

            if (err){
                respuesta = {
                                status : 'error',
                                message : 'Error al modificar la información del usuario'
                            }
            }else{
                respuesta = {
                                status: 'ok',
                                message: 'Usuario Modificado'
                            }
            }

            console.log(req.body);
            console.log(values);
            res.json(respuesta);

        })
});






module.exports = router;