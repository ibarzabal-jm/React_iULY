const express = require('express');
const cnn = require('../cnn');
const router = express.Router();

router.get('/', (req,res) => {
    cnn.query("SELECT * FROM direcciones",
        function(err, result, fields){
                if (err) throw err;
                
                res.json(result);
                
        }
    );
} );


router.post('/', (req, res) => {

    let sql = ``;

    let values;
    cnn.query(sql, values, function (err, result, fields){
                
                let respuesta;
                if ( err ){
                    respuesta = {
                                    status:'error',
                                    message:'No se pudo agregar la dirección'
                                }
                }else{
                    respuesta = {
                                    status:'ok',
                                    message:'Se agregó la dirección correctamente'
                                }
                }

                res.json(respuesta);

            }
    );


});






module.exports = router;