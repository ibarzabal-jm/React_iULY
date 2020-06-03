import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBView, MDBMask, MDBBtn, MDBIcon} from 'mdbreact';
import {Link} from 'react-router-dom'
import imagen from '../images/fondo.jpg'


const Principal = () =>{
    return(
        <MDBView src={imagen}>
            <MDBMask overlay="black-strong" className="flex-center flex-column text-white text-center">
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="6">
                        
                            <h2 className="display-5 font-weight-bold white-text pt-5 mb-2">¿Buscás iULY?</h2>

                            
                            <hr className="hr-light"></hr>

                            
                            <h4 className="white-text my-4">Contratá a nuestro personal de Confianza.</h4>

                            <Link to={"/registroEmpleador"}>
                                <MDBBtn style={{textTransform: 'capitalize'}} outline color="white" classNAme=""><MDBIcon far icon="address-card" size="lg" className="mr-2" /> Contratá iULY</MDBBtn>
                            </Link>
                        </MDBCol>

                        <MDBCol md="6">
                            <h2 className="display-5 font-weight-bold white-text pt-5 mb-2">¿Buscás Trabajo?</h2>
                                                                                    
                            <hr className="hr-light"></hr>

                            <h4 className="white-text my-4">Formá parte de nuestro equipo, formá parte de iULY.</h4>

                            <Link to={"/registroTrabajador"}>
                                <MDBBtn style={{textTransform: 'capitalize'}} outline color="white" classNAme=""><MDBIcon far icon="address-card" size="lg" className="mr-2" /> Ser iULY </MDBBtn>
                            </Link>

                        </MDBCol>                    
                    </MDBRow>
                </MDBContainer>
            </MDBMask>
        </MDBView>



    )
}

export default Principal;