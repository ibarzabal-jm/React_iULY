import React, { useState, useEffect } from 'react';
import { MDBRow, MDBContainer} from 'mdbreact';
import TarjetaiULY from './TarjetaiULY';

const ListadoiULY = () =>{

    const [ mucamas, setMucamas ] = useState([]);

    useEffect ( ()=>{
                    fetch('http://localhost:8888/mucamas').then(
                            response => response.json()
                    ).then(
                        data => {
                            setMucamas(data);
                        }
                    )
                    
                    ;
                } , []
    )


    return(
        <>
            <MDBContainer fluid>

                <MDBRow>

                    {
                        mucamas.map( mucama => {

                                            return(
                                                
                                                <TarjetaiULY    id={mucama.mucama_id}
                                                                nombre={mucama.nombre}
                                                                imagen={mucama.foto}
                                                                nacionalidad={mucama.nacionalidad}
                                                                edad={mucama.nacimiento}
                                                                alta={mucama.alta}
                                                                modalidad="Con retiro"

                                
                                                                limpieza="Limpieza"
                                                                cocina="Cocina básica"
                                                                cuidadonenes=""
                                                                cuidadoancianos=""
                                                                planchado="Planchado"
                                
                                                />
                                            )
                        })
                    }
                
                </MDBRow>
            </MDBContainer>
           
        </>
    )
}

export default ListadoiULY;