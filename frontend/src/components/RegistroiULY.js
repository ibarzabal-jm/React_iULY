import React from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBView, MDBMask} from 'mdbreact';
import imagen from '../images/registro_fondo.jpg'
import FormularioRegistro from './FormularioRegistro';



function RegistroiULY(props){

    return(

        
            <MDBView src={imagen}>
                <MDBMask overlay="black-strong" className="flex-center flex-column text-white">
                    <MDBContainer  style={{ height: '100%', width: '100%', paddingTop: '10rem' }} className='mt-5  d-flex justify-content-center align-items-center'>
                        <MDBRow>
                            <MDBCol md="6">
                                <h1 className='h1-responsive font-weight-bold'>
                                    Se parte ahora de nuestro equipo!
                                </h1>
                                <hr className='hr-light' />
                                <h6 className='mb-4'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                                repellendus quasi fuga nesciunt dolorum nulla magnam veniam
                                sapiente, fugiat! Commodi sequi non animi ea dolor molestiae,
                                quisquam iste, maiores. Nulla. HOALASFASFDSDAS
                                </h6>
                               
                            </MDBCol>
                            <MDBCol md="6" >
                                <FormularioRegistro tipo="iULY" handleLoginSucces={props.handleLoginSucces} />
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBMask>
            </MDBView>


    )

}


export default RegistroiULY;