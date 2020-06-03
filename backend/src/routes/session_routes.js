const express = require('express');
const router = express.Router();
const conexion = require ('../cnn');


router.post('/', (req, res) =>{

    let sql = `
                 SELECT *
                 FROM usuarios
                 WHERE usuario_mail = ?
                   AND usuario_pass = ?`;

    let values = [
                    req.body.mail,
                    req.body.password 
                 ]

    conexion.query(sql, values, (err, result, fields) => {
        
        if ( err ) {
            res.json(
                {
                    status : 'error',
                    message : 'No es posible acceder en este momento. Intente nuevamente en unos minutos.'
                }
            )
        }else{
            
            if(result.length == 1){
                req.session.user   = req.body.mail;
                req.session.userId = result[0].usuario_id;

                let tipoUsuario;


                switch (result[0].usuario_tipo_id) {
                    case 1:
                        tipoUsuario='MasterAdmin';
                        break;
                    case 2:
                        tipoUsuario='Admin';
                        break;
                    case 3:
                        tipoUsuario='Mod'
                        break;
                    case 4:
                        tipoUsuario='Cliente'
                        break;
                    case 5:
                        tipoUsuario='Trabajador'
                  }

                res.json(
                    {
                        status     : 'ok',
                        message    : 'sesión iniciada',
                        loggedUser : {
                                        id     : req.session.userId,
                                        nombre : result[0].usuario_nombre,
                                        mail   : result[0].usuario_mail,
                                        tipo : tipoUsuario
                                     }
                    }
                )
            }
            else{
                res.json(
                    {
                        status  : 'error',
                        message : 'Usuario y/o contraseña no validos'
                    }
                );
            }

        }
    })



})

router.delete('/', (req, res) => {
    req.session.destroy( function (err){
        if (err){
            res.json(
                {
                    status:'error',
                    message:'Error al cerrar sesión'

                }
            )
        } else {
            res.clearCookie('iULY');
            res.json(
                {
                    status:'ok',
                    message:'Sesión cerrada'
                }
            )
        }
    
    }
    );
})

module.exports = router;