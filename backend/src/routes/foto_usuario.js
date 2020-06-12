const express = require('express');
const cnn = require('../cnn');
const router = express.Router();
const path = require('path');


router.put('/', (req,res) => {
    
    console.log(req.files.fotoPerfil.name);

    let imagesFileName = '';

    if ( req.files ){
        let userImage = req.files.fotoPerfil;

        imagesFileName = Date.now() + path.extname(userImage.name);

        userImage.mv('./public/images/' + imagesFileName, function(err){
            if ( err ){
                console.log(err);
            }
        })
        console.log(imagesFileName);
    }else{
        console.log('No hay archivo');
    }

    let sqlUPDATE = `UPDATE usuarios
                        SET usuario_imagen = ?

                        WHERE usuario_id = ?`
    let params = [
                   process.env.IMAGES_URL + imagesFileName,
                   req.session.userId
                 ]

    cnn.query(sqlUPDATE,params, function(err,result,fields){
        let respuesta;

        if(err){
            respuesta = {
                            status:'Error',
                            message:'Error al agregar foto'
                        }
        } else {
            respuesta = {
                            status:'Ok',
                            message:'Se agrego correctamente la foto'
                        }
        }
        
        res.json(respuesta);
    })

    
})

module.exports = router;

