import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";


const Footer = () => {
  return (
      <MDBFooter color="cyan darken-3" className="font-small">
        
        <div style={{ backgroundColor: "#0097a7" }}>
          <MDBContainer center>
            <MDBRow  >
              <MDBCol md="12" className="pt-3" center>           
                <ul className="list-inline text-center">
                    
                    <li className="list-inline-item">
                        <a href="facebook.com" className="btn-floating btn-fb mx-1"><i className="fab fa-facebook-f mr-md-5 mr-3 fa-2x"> </i></a>
                    </li>
                    <li className="list-inline-item">
                      <a href="twitter.com" className="btn-floating btn-tw mx-1"><i className="fab fa-twitter mr-md-5 mr-3 fa-2x"></i></a>
                    </li>
                    <li className="list-inline-item">
                        <a href="instagram.com" className="btn-floating btn-gplus mx-1"><i className="fab fa-instagram mr-md-5 mr-3 fa-2x"></i></a>
                    </li>
                    <li className="list-inline-item">
                        <a href="https://www.linkedin.com/feed/" className="btn-floating btn-li mx-1"><i className="fab fa-linkedin-in mr-md-5 mr-3 fa-2x"></i></a>
                    </li>
                  </ul>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>


        <MDBContainer center>
          <MDBRow>
            <MDBCol md="4" >
              <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Contacto</h5>
              <ul className="list-unstyled">
                  <li><p><a className="btn-li" href="mailto:iULY.enterprise@gmail.com"><i className="fas fa-at mr-1"></i>iULY.enterprise@gmail.com</a></p></li>
                  <li><p><a href="https://www.google.com/maps/search/callefalsa+123/@-34.6781975,-58.4976487,12z"><i className="fas fa-home mr-1"></i>Calle Falsa 123, CABA, Argentina</a></p></li>
                  <li><p><i className="fas fa-phone mr-1"></i>4522-7686</p></li>
                  <li><p><a className="btn-li" href="#!"><i className="fas fa-star mr-1"></i>Calificanos</a></p></li>
              </ul>
            </MDBCol>
            <MDBCol md="4" >
              <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Ayuda</h5>
              <ul className="list-unstyled">
                <li><p><a className="btn-li" href="comoFunciona.html"><i className="fas fa-question-circle mr-1"></i>¿Cómo Funciona?</a></p></li>
                <li><p><a className="btn-li" href="dudas.html"><i className="fas fa-info mr-1"></i>¿Tienes dudas?</a></p></li>
                <li><p><a className="btn-li" href="terminosycondiciones.html"><i className="far fa-check-square mr-1"></i>Términos y Condiciones</a></p></li>
                <li><p><a className="btn-li" href="https://www.argentina.gob.ar/trabajo/tribunaldomestico/condiciones"><i className="fa fa-address-card mr-1"></i>Condiciones de Trabajo</a></p></li>
                <li><p><a className="btn-li" href="derechosLegales.html"><i className="fa fa-gavel mr-1"></i>Derechos legales.</a></p></li>
                <li><p><a className="btn-li" href="http://servicios.infoleg.gob.ar/infolegInternet/anexos/210000-214999/210489/norma.htm"><i className="fa fa-gavel mr-1"></i>Ley 26844</a></p></li>
              </ul>
            </MDBCol>
            <MDBCol md="4">
              <h5 className="font-weight-bold text-uppercase mt-3 mb-4">¿Dónde Trabajamos?</h5>
							<ul className="list-unstyled ">
						    <li><p>Ciudad Autónoma de Buenos Aires</p></li>
						    <li><p>Bs As Zona Norte</p></li>
								<li><p>Bs As Zona Sur</p></li>
								<li><p>Bs As Zona Oeste</p></li>
								<li><p>Rosario</p></li>
								<li><p>Córdoba</p></li>
							</ul>
            </MDBCol>
          </MDBRow>

        </MDBContainer>

        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="#!"> iULY.com </a>
          </MDBContainer>
        </div>
      </MDBFooter>
  )
}

export default Footer;