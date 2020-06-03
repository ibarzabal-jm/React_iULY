import React, { useState, useEffect } from 'react';
import { MDBRow, MDBCol} from 'mdbreact';
import {useParams} from 'react-router-dom';


export default ()=>{
    
    let { id } = useParams(); 
    

    const [iuly, setIULY] = useState(null);
    
    const cargaDatos = () =>{
            fetch('http://localhost:8888/mucamas/' + id).then(
                response => response.json()
            ).then( data => {
                setIULY(data);
            })
    }
    
    useEffect(cargaDatos, []  )
    
    return(

        iuly && 
            <MDBRow className="d-flex justify-content-center">
                <MDBCol md="4" className=""> 
                    <img src="http://localhost:8888/images/pioja.webp" alt='HOLA' className="img-fluid" />
                </MDBCol>
                <MDBCol md="4">
                    <h2>{iuly.nombre}</h2>
                    <h3>{iuly.nacionalidad}</h3>
                </MDBCol>
            </MDBRow>
    )
    
}