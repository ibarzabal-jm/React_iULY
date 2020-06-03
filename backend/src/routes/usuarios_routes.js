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
    cnn.query("SELECT * FROM usuarios WHERE usuario_id = " + req.params.id,
        function(err, result, fields){
                if (err) throw err;

                res.json(result[0]);
                
        }
    );
} );

router.put('/:id', (req,res) =>{
    let sql= `UPDATE usuarios
                 SET usuario_nacimiento   = ?,
                     direccion_id         = ?,
                     usuario_nacionalidad = ?,
                     usuario_celular      = ?,
                     usuario_dni_verificado = ?  `;
    let values =[
                    req.body.nacimiento,
                    req.body.nacionalidad,
                    req.body.celular,
                ];
});






module.exports = router;