const express = require('express');
const router = express.Router();
const conexion = require('../cnn');


router.get('/:user',(req, res) => {
    let sql = ` SELECT usuarios.usuario_nombre, usuarios.usuario_apellido, usuarios.usuario_dni, mucamas.mucama_id, tareas.tarea_nombre, tareas.tarea_precio
                FROM usuarios,mucamas,tareas, mucamas_tareas
                WHERE mucamas_tareas.mucama_id = ${req.params.user} 
                AND mucamas_tareas.tarea_id = tareas.tarea_id 
                AND usuarios.usuario_id = mucamas.mucama_usuario_id 
                AND mucamas_tareas.mucama_id = mucamas.mucama_id
    `

    let values = [req.params.user];

    conexion.query(sql, values, (err, result, fields) =>{
        if (err) throw err;

        res.json(result);
    })
})






module.exports = router;

