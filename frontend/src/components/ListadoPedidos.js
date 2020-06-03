import React, { useState, useEffect } from 'react';
import { MDBContainer} from 'mdbreact';
import TarjetaPedidos from './TarjetaPedidos';

const ListadoiULY = () =>{

    const [ pedidos, setPedidos ] = useState([])

    useEffect ( ()=>{
                    fetch('http://localhost:8888/pedidos').then(
                            response => response.json()
                    ).then(
                        data => {
                            setPedidos(data);
                            console.log(data);
                            
                        }
                    );
                }, []
    )

    return(
        <>
            <MDBContainer fluid>

                {
                    pedidos.map( pedido => {
                                        let periodo;
                                        switch(pedido.periodo_id){
                                            case 1:
                                                periodo='Diario';
                                                break;
                                            case 2:
                                                periodo='Semanal';
                                                break;
                                            case 3:
                                                periodo='Mensual';
                                                break;
                                            case 4:
                                                periodo='Quincenal';
                                                break;
                                            default:
                                                periodo='ERROR';
                                        }
                                        return(
                                            
                                            <TarjetaPedidos     id={pedido.clientes_id}
                                                                nombre={pedido.nombre}                                                    

                                                                tipo={periodo}
                                                                fecha={pedido.fecha_inicio}
                                                                hora_inicio={pedido.hora_inicio}
                                                                cantidad={pedido.cantidad_horas}

                                                                
                                                                limpieza="Limpieza"
                                                                cocina="Cocina básica"
                                                                cuidadonenes=""
                                                                cuidadoancianos=""
                                                                planchado="Planchado"
                            
                                            />
                                        )
                    })
                }
               
            </MDBContainer>
           
        </>
    )
}

export default ListadoiULY;