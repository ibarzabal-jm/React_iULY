const express = require('express');
const cnn = require('../cnn');
const router = express.Router();



router.get('/', (req, res) =>{
    let sql = `SELECT *
                FROM reservas`;

    cnn.query(sql,
        function(err,result,fields){
            
            let respuesta;
            if( err ){
                respuesta = {
                                status:'error',
                                message:'No se pudo enviar las reservas'
                            }
            }else{
                res.json(result);
            }

        }
    );
})

router.get('/user/:id', (req,res) => {
    let sql = `SELECT * 
                FROM reservas`;

    cnn.query(sql,
        function(err,result,fields){
            let respuesta;

            if( err ){

                respuesta = {
                                status:'error',
                                message:'No se pudo enviar la reserva'
                            }
            }else{
                res.json(result[0]);
            }
            
        }
        
    )
})




module.exports = router;

