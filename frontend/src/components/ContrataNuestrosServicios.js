import React from 'react';
import {MDBContainer , MDBRow, MDBIcon, MDBCol} from 'mdbreact';


function ContrataNuestrosServicios(){

    return(
        <MDBContainer >
             <h2 class="mb-5 font-weight-bold text-center">Contratá Nuestros Servicios</h2>
             <MDBRow>
                <MDBCol md="3" className="mb-1 text-center">
	                    	<MDBIcon icon="clock" size="4x"  className="orange-text"/>
	                        <h4 className="my-3 font-weight-bold">Velocidad</h4>
	                        <p className="grey-text">Personaliza tu pedido de limpieza con absoluta rapidez.</p>
	            </MDBCol>

	            <MDBCol md="3" className="mb-1 text-center">
                            <MDBIcon icon="shield-alt" size="4x" className="orange-text" />
	                        <h4 className="my-3 font-weight-bold">Seguridad</h4>
	                        <p className="grey-text">Todos cuentan con experiencia comprobada verificados por nuestro propio equipo.</p>
	            </MDBCol>


	            <MDBCol md="3" className="mb-1 text-center">
	                  		<MDBIcon icon="history" size="4x"  className="orange-text"/>
	                        <h4 className="my-3 font-weight-bold">Historial</h4>
	                        <p className="grey-text">Conocé al personal doméstico a través de sus perfiles, referencias y evaluaciones.</p>
	            </MDBCol>

  				<MDBCol md="3" className="mb-1 text-center">

	                        <MDBIcon icon="comments" size="4x"  className="orange-text"/>
	                        <h4 className="my-3 font-weight-bold">Entrevistá</h4>
	                        <p className="grey-text">Puedes hablar con nuestro personal de forma individual mediante un chat seguro.</p>
	           </MDBCol>
             </MDBRow>
        </MDBContainer>

    )

}

export default ContrataNuestrosServicios;