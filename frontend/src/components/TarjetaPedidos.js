import React from 'react';
import { MDBCard, MDBCardBody,  MDBCardTitle, MDBRow, MDBCol, MDBCardFooter, MDBBtn} from 'mdbreact';
import {Link} from 'react-router-dom';


const TarjetaPedidos = (props) =>{

    return(
        <>
                <MDBCol md={12} lg={12} xl={12} className="mb-4 mr-4 align-items-stretch justify-content-center">
                    <MDBCard>
                            
                            <MDBRow >
                                <MDBCol md="3">
                                        <Link to={"/cliente/" + props.id}>
                                            <img className="img-fluid" src='https://img.freepik.com/foto-gratis/pensativo-cliente-pensando-oferta-especial_74855-3588.jpg?size=626&ext=jpg' alt="imagen"></img>
                                        </Link>
                                </MDBCol>


                                <MDBCol  md="9">
                                    <MDBCardBody>

                                        <MDBRow>
                                            <MDBCol>
                                                <Link to={"/cliente/" + props.id}  >                    
                                                    <MDBCardTitle>
                                                        {props.nombre}     
                                                    </MDBCardTitle>
                                                </Link>
                                            </MDBCol>
                                        </MDBRow>

                                        <hr />
                                        <MDBRow>
                                            <MDBCol md="3">
                                                <h5 className="font-weight-bold text-uppercase">Datos del Pedido:</h5>
                                            </MDBCol>
                                            <MDBCol md="9">
                                            <ul className="text-left list-unstyled" > 
                                                    <li>Período: {props.tipo}</li>
                                                    <li>Fecha inicio: {props.fecha}</li>
                                                    <li>Hora inicio: {props.hora_inicio}</li>
                                                    <li>Cantidad de Horas: {props.cantidad}</li>
                                                    <li>ZONA: {props.zona}</li>
                                                </ul>           
                                            </MDBCol>        
                                        </MDBRow>

                                        <hr />
                                    
                                        <MDBRow>
                                            <MDBCol md="3">
                                                <h5 className="font-weight-bold text-uppercase">Detalles del Trabajo Solicitado:</h5>
                                            </MDBCol>
                                            <MDBCol md="9">
                                                <ul className="list-unstyled">
                                                    <li>{props.limpieza}</li>
                                                    <li>{props.cuidadonenes}</li>
                                                    <li>{props.cuidadoancianos}</li>
                                                    <li>{props.cocina}</li>
                                                    <li>{props.planchado}</li>
                                                </ul>
                                            </MDBCol>
                                        </MDBRow>
                                    </MDBCardBody>
                                </MDBCol>

                            </MDBRow>
                        <MDBCardFooter>
                            <MDBRow>
                                <MDBCol md="4">
                                    <h6>Precio por el trabajo: {props.precio}</h6>
                                </MDBCol>
                            </MDBRow>
                        </MDBCardFooter>
                        <MDBCardFooter>
                            <MDBBtn size="sm">Contactar</MDBBtn>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
           
        </>
    )
}

export default TarjetaPedidos;