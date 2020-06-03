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

    cnn.query(sql, function (err, result, fields){
                
                if ( err ) throw err;

                res.send('Dirección Agregada');

            }
    );


});






module.exports = router;