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


//obtener direcciones segun la id
router.get('/:id', (req,res) => {
    let sql = ``;





    
    cnn.query(sql, 
        function (err, result, fields){
            if (err) throw err;

            res.json(result[0]);
        }
    );
});


//obtener direccion segun el usuario
router.get('/user/:id', (req,res) => {
    let sql = ``;

    cnn.query(sql, 
        function (err, result, fields){
            if (err) throw err;

            res.json(result[0]);
        }
    );
});


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

router.put('/:id', (req, res) => {

    let sql = ``;

    let values;
    cnn.query(sql, values, function (err, result, fields){
                
                let respuesta;
                if ( err ){
                    respuesta = {
                                    status:'error',
                                    message:'No se pudo cambiar la dirección'
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

