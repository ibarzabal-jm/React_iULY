import React from 'react';
import {MDBContainer , MDBRow, MDBIcon, MDBCol} from 'mdbreact';
import '../styles/SeDeNuestroEquipo.css';


function SeDeNuestroEquipo(){

    
    return(
        <div className="fondo-nuestro-equipo" >
            <section className="rgba-black-strong ">
            <MDBContainer>
                <h2 class="mb-5 font-weight-bold white-text text-center">Sé parte de Nuestro Equipo</h2>
                <MDBRow>
                    <MDBCol md="3" className="mb-1 text-center">
                                <MDBIcon icon="clock" size="4x"  className="orange-text"/>
                                <h4 className="my-3 font-weight-bold white-text">Velocidad</h4>
                                <p className="white-text">Buscá trabajo de manera inmediata.</p>
                    </MDBCol>

                    <MDBCol md="3" className="mb-1 text-center">
                                <MDBIcon icon="shield-alt" size="4x" className="orange-text" />
                                <h4 class="my-3 font-weight-bold white-text">Seguridad</h4>
	                            <p class="white-text">Te brindamos la mejor covertura de salud y seguridad para que sólo te preocupes por tu trabajo.</p>
                    </MDBCol>

                    <MDBCol md="3" className="mb-1 text-center">
                                <MDBIcon icon="history" size="4x"  className="orange-text"/>
                                <h4 class="my-3 font-weight-bold white-text">Historial</h4>
	                            <p class="white-text">Conocé el historial de tu empleador través de su perfil y evaluaciones.</p>                               
                    </MDBCol>

                    <MDBCol md="3" className="mb-1 text-center">

                                <MDBIcon far icon="calendar" size="4x"  className="orange-text"/>
                                <h4 class="my-3 font-weight-bold white-text">Organización</h4>
	                            <p class="white-text">Podrás gestionar y organizar tus trabajos y actividades dentro y fuera de iULY.</p>
                    </MDBCol>

                    <MDBCol md="6" className="mb-1 text-center">

                                <MDBIcon icon="dollar-sign" size="4x"  className="orange-text"/>
                                <h4 class="my-3 font-weight-bold white-text">Gratuito</h4>
	                            <p class="white-text">Registro totalmente gratuito.</p>
                    </MDBCol>
                    <MDBCol md="6" className="mb-1 text-center">

                                <MDBIcon icon="hand-holding-usd" size="4x"  className="orange-text"/>
                                <h4 class="my-3 font-weight-bold white-text">Forma de cobrar</h4>
	                            <p class="white-text"> Efectivo, Tarjeta o MercadoPago</p>
                    </MDBCol>

                </MDBRow>
            </MDBContainer>
            </section>
        </div>

    )

}

export default SeDeNuestroEquipo;