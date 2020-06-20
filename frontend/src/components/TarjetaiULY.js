import React, {useEffect } from 'react';
import { MDBCard, MDBCardBody,  MDBCardTitle, MDBRow, MDBCol, MDBIcon, MDBCardFooter, MDBBtn} from 'mdbreact';
import iconoNoFavorito from '../images/no_favorito.png';
import {Link} from 'react-router-dom';


const TarjetaiULY = (props) =>{

    
    
    useEffect ( ()=>{
                    fetch('http://localhost:8888/tareas/' + props.id).then(
                            response => response.json()
                    ).then(
                        data => {

                            data.forEach(element => {
                                console.log(element.tarea_nombre);                                
                            });
                           
                        }
                    )
                    
                    ;
                } , []
    )

    return(
        <>
                <MDBCol md='6' lg='4' xl='3' className="mx-0.5 my-2 text-center d-flex align-items-stretch justify-content-center">
                    <MDBCard>
                        <MDBCardBody>

                            <a className="nav-link p-0 text-right" href="#!">
                                <img src={iconoNoFavorito} alt="no-favorito"></img>
                            </a>
                            <Link to={"/iULY/" + props.id}  >                    
                                <MDBCardTitle>
                                    {props.nombre}        
                                </MDBCardTitle>
                                <hr/>
                            </Link>
                            
                            <MDBRow>
                                <hr/>
                                <MDBCol md="4">
                                    <img className="img-fluid" src={props.imagen} alt="imagen"></img>
                                </MDBCol>
                                <MDBCol md="8">
                                    <ul className="text-left list-unstyled" > 
                                        <li>{props.nacionalidad}</li>
                                        <li>EDAD : {props.edad} años</li>
                                        <li>Fecha alta: {props.alta}</li>
                                        <hr></hr>
                                        <li>Ultimo actualización de perfil: {props.actualizacion}</li>
                                        <li>Modalidad de Trabajo: {props.modalidad}</li>
                                    </ul>
                                </MDBCol>                            
                            </MDBRow>

                            <hr></hr>
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Tipo de Trabajo</h5>
                            <ul className="list-unstyled">
                               
                                <li>{props.limpieza}</li>
                                <li>{props.cuidadonenes}</li>
                                <li>{props.cuidadoancianos}</li>
                                <li>{props.cocina}</li>
                                <li>{props.planchado}</li>
                            </ul>



                        </MDBCardBody>
                        <MDBCardFooter>
                            
                            <MDBIcon icon="shield-alt" size="1x" className="red-text pr-3" />
                        </MDBCardFooter>
                        <MDBCardFooter>
                            <MDBBtn>Contactar</MDBBtn>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
           
        </>
    )
}

export default TarjetaiULY;