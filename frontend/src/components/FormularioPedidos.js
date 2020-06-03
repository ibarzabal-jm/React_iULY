import React from 'react';
import { MDBContainer, MDBCol, MDBIcon, MDBRow, MDBBtn} from 'mdbreact';
import "../styles/FormularioRegistro.css";


const FormularioPedidos=() =>{

    return(

        <MDBContainer>
        <MDBIcon icon='user' className="orange-text"  /> Hacer un Pedido:
        <hr className='hr-black' />
            <MDBRow>
                <MDBCol size='10'>
                     <form className="blue-text" >

                        <MDBRow className="text-center">
                            <MDBCol>
                                <MDBBtn>Único</MDBBtn>
                                Desde $200 la hora
                            </MDBCol>
                            <MDBCol>
                                <MDBBtn>Quincenal</MDBBtn>
                                Desde $170 la hora
                            </MDBCol>
                            <MDBCol>
                                <MDBBtn>Semanal</MDBBtn>
                                Desde $150 la hora
                            </MDBCol>
                        </MDBRow>
                        <br></br>


                        <label className="grey-text">Días:</label>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="Lunes" />
                            <label className="custom-control-label blue-text" for="Lunes">Lunes</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="Martes" />
                            <label className="custom-control-label blue-text" for="Martes">Martes</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="Miercoles" />
                            <label className="custom-control-label blue-text" for="Miercoles">Miercoles</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="Jueves" />
                            <label className="custom-control-label blue-text" for="Jueves">Jueves</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="Viernes" />
                            <label className="custom-control-label blue-text" for="Viernes">Viernes</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="Sabado" />
                            <label className="custom-control-label blue-text" for="Sabado">Sabado</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="Domingo" />
                            <label className="custom-control-label blue-text" for="Domingo">Domingo</label>
                        </div>

                      



                        <label htmlFor="defaultFormInicio" className="grey-text"> Fecha de Inicio  </label>
                        <input type="date" id="defaultFormInicio" className="form-control" />
                        <br />

                        <label className="grey-text">Cantidad de Horas:</label>
                        <select className="custom-select">
                                <option value="3">3 horas</option>
                                <option value="4">4 horas</option>
                                <option value="5">5 horas</option>
                                <option value="6">6 horas</option>
                                <option value="7">7 horas</option>
                                <option value="8">8 horas</option>
                        </select>
                        <br />
                        <br></br>


                        <select className="custom-select">
                                <option>Hora de inicio:</option>
                                <option value="6">6:00</option>
                                <option value="7">7:00</option>
                                <option value="8">8:00</option>
                                <option value="9">9:00</option>
                                <option value="10">10:00</option>
                                <option value="11">11:00</option>
                                <option value="12">12:00</option>
                                <option value="13">13:00</option>
                                <option value="14">14:00</option>
                                <option value="15">15:00</option>
                                <option value="16">16:00</option>
                                <option value="17">17:00</option>
                                <option value="18">18:00</option>
                                <option value="19">19:00</option>
                                <option value="20">20:00</option>
                                <option value="21">21:00</option>

                        </select>
                        <br />
                        <br></br>

                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="defaultCheckedDisabled" checked disabled />
                            <label className="custom-control-label" for="defaultCheckedDisabled">Default checked disabled</label>
                        </div>
                        


                        

                        <div className="text-center mt-4">
                            <MDBBtn color="indigo" type="submit">Realizar Pedido</MDBBtn>
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

        
    )
}


export default FormularioPedidos;