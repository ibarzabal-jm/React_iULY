import React from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBView, MDBMask} from 'mdbreact';
import imagen from '../images/usuario.jpg'
import FormularioRegistro from './FormularioRegistro';



function RegistroClientes(props){

    return(

        
            <MDBView src={imagen}>
                <MDBMask overlay="black-strong" className="flex-center flex-column text-white">
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol>
                                <h1 className='h1-responsive font-weight-bold'>Registrate ahora  </h1>
                                <hr className='hr-light' />
                                <h6 className='mb-4'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                                repellendus quasi fuga nesciunt dolorum nulla magnam veniam
                                sapiente, fugiat! Commodi sequi non animi ea dolor molestiae,
                                quisquam iste, maiores. Nulla.
                                </h6>
                            </MDBCol>
                            <MDBCol>
                                <FormularioRegistro tipo="cliente" handleLoginSucces={props.handleLoginSucces}>

                                </FormularioRegistro>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBMask>
            </MDBView>


    )

}


export default RegistroClientes;