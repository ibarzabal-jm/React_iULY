import React from 'react';
import { MDBContainer, MDBCol, MDBIcon, MDBRow, MDBBtn} from 'mdbreact';
import "../styles/FormularioRegistro.css";


const FormularioCuenta=() =>{

    return(

        <MDBContainer>
        <MDBIcon icon='user' className="orange-text"  /> Datos de la Cuenta:
        <hr className='hr-black' />
            <MDBRow>
                <MDBCol size='8'>
                     <form>

                        <label htmlFor="defaultFormNumero" className="grey-text">  Numero de Usuario</label>
                        <input type="text" id="defaultFormNumero" className="form-control" />
                        <br />


                        <label htmlFor="defaultFormEmailEx" className="grey-text">  Mail </label>
                        <input type="email" id="defaultFormEmailEx" className="form-control" />
                        <br />


                        <label htmlFor="defaultFormPassword" className="grey-text">   Contraseña </label>
                        <input type="password" id="defaultFormPassword" className="form-control" />
                        <br/>

                        


                        <div className="text-center mt-4">
                            <MDBBtn color="indigo" type="submit">Guardar</MDBBtn>
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

        
    )
}


export default FormularioCuenta;