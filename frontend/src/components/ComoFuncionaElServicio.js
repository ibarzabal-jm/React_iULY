import React from 'react';
import {MDBContainer , MDBRow, MDBIcon, MDBCol} from 'mdbreact';
import '../styles/ComoFuncionaElServicio.css';



function ComoFuncionaElServicio(){

    
    return(
		<>
        <MDBContainer className="text-center">

	       		<h2 className="b-5 font-weight-bold">¿Cómo funciona?</h2>
	       		<MDBRow>
	       			<MDBCol md="4" className="mb-1">
	       				<MDBIcon  icon="search" size ="4x" className="orange-text"/>
	                    <h4 className="my-3 font-weight-bold ">1.Buscá</h4>
	                    <p className="grey-text"> Buscá a tu iULY (empleada doméstica) para ocasiones puntuales, de último momento, por tiempo parcial o por tiempo completo. Según tu criterio</p>
	       			</MDBCol>

	       			<MDBCol md="4" className="mb-1">
	       				<MDBIcon  icon="users" size ="4x" className="orange-text"/>
	                    <h4 className="my-3 font-weight-bold">2.Contacto</h4>
	                    <p className="grey-text"> Buscá, entrevistá y elegí. Sólo pagas cuando se confirma tu reserva con tu iULY. Las iULY pueden contactar gratis al empleador.</p>
	       			</MDBCol>

	       			<MDBCol md="4" className="mb-1">
	       				<MDBIcon  icon="handshake" size ="4x" className="orange-text"/>
	                    <h4 className="my-3 font-weight-bold">3.Planificá Encuentros</h4>
	                    <p className="grey-text"> Agendar un encuentro es fácil con nuestro planificador. Te mantendremos notificado(a) con recordatorios.</p>
	       			</MDBCol>
                </MDBRow>
				<hr></hr>

		</MDBContainer>

		<MDBContainer className="mb-3">
			<h2 className="b-5 font-weight-bold text-center">¿Qué incluye el servicio?</h2>
			<MDBRow className="i"  >
				<MDBCol md='8' className='imagen-servicio'>
					
				</MDBCol>
				<MDBCol md="4" className=" mb-1 text-left">
							<p><i className="fas fa-check-circle fa-1x ">Limpieza de habitaciones (barrer, trapear, sacudir, etc)</i></p>
							<p><i className="fas fa-check-circle fa-1x ">Limpieza de Baños y Cocina</i></p>
							<p><i className="fas fa-check-circle fa-1x ">Lavado y Planchado de ropa (únicamente si lo aclara en la solicitud)</i></p>
							<p><i className="fas fa-check-circle fa-1x ">Cocina básica(únicamente si lo aclara en la solicitud)</i></p>
							<p><i className="fas fa-check-circle fa-1x ">Cuidado de niños y/o Ancianos(únicamente si lo aclara en la solicitud)</i></p>
							<p><i className="fas fa-check-circle fa-1x ">NO incluye artículos de limpieza. El empleador deberá proveerlos.</i></p>
				</MDBCol>      
			</MDBRow>
		</MDBContainer>
	</>

	    
    )

}

export default ComoFuncionaElServicio;