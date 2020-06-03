import React from 'react';
import { MDBContainer, MDBCol, MDBIcon, MDBRow, MDBBtn} from 'mdbreact';
import "../styles/FormularioRegistro.css";



const FormularioDireccion=() =>{

    return(

        <MDBContainer>
            <MDBIcon icon='user' className="orange-text"  /> Dirección:
            <hr className='hr-black' />
            <MDBRow>
                <MDBCol size='8'>
                     <form>

                        <select className="custom-select">
                                <option>Ciudad:</option>
                                <option value="1">Ciudad Autónoma de Buenos Aires</option>
                                <option value="2">GBA Norte</option>
                                <option value="3">GBA Oeste</option>
                                <option value="4">GBA Sur</option>
                                <option value="5">Ciudad de Córdoba</option>
                                <option value="6">Rosario</option>
                        </select>
                        <br /> 
                        <br />  


                        <label htmlFor="defaultFormPartido">     Partido  </label>
                        <input type="text" id="defaultFormPartido" className="form-control" />
                        <br /> 

                        <select className="custom-select">
                                <option>Barrio:</option>
                                <option value="1">Ciudad Autónoma de Buenos Aires</option>
                                <option value="2">GBA Norte</option>
                                <option value="3">GBA Oeste</option>
                                <option value="4">GBA Sur</option>
                                <option value="5">Ciudad de Córdoba</option>
                                <option value="6">Rosario</option>
                        </select>      

                        <label htmlFor="defaultFormCalle">     Calle  </label>
                        <input type="text" id="defaultFormCalle" className="form-control" />
                        <br />

                        <label htmlFor="defaultFormCalleNumero">     Numero  </label>
                        <input type="number" id="defaultFormCalleNumero" className="form-control" />
                        <br />        

                        <select className="custom-select">
                                <option>Tipo de Casa:</option>
                                <option value="1">Casa</option>
                                <option value="2">Departamento</option>
                                <option value="3">Duplex</option>
                                <option value="4">Oficina</option>
                                <option value="5">Otro</option>
                                <option value="6">PH</option>
                        </select>
                        <br />
                        <br></br>

                        <label htmlFor="defaultFormCallePiso"> Número de Piso  </label>
                        <input type="number" id="defaultFormCallePiso" className="form-control" />
                        <br />

                        <label htmlFor="defaultFormCalleDepartamento">     Departamento  </label>
                        <input type="text" id="defaultFormCalleDepartamento" className="form-control" />
                        <br />


                        

                        <div className="text-center mt-4">
                            <MDBBtn color="orange" type="submit">Guardar Dirección</MDBBtn>
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

        
    )
}


export default FormularioDireccion;