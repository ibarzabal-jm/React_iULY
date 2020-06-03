import React, {useState} from 'react';
import { MDBContainer, MDBCol, MDBIcon, MDBRow, MDBBtn} from 'mdbreact';
import Form from 'react-bootstrap/Form';
import "../styles/FormularioRegistro.css";


const FormularioDatosPersonales=() =>{

    const [datos, setDatos] = useState({
        nombre:         '',
        apellido:       '', 
        nacionalidad:   '',
        dni:            '',
        celular:        '',
        nacimiento:     '',


    });

    const handleInputChange = (event) => {
 
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const handleSave = (event) =>{
       
        console.log('Enviando datos' + datos.nombre + ' ' +datos.apellido);
    }

    return(

        <MDBContainer>
        <MDBIcon icon='user' className="orange-text"  /> Datos Personales:
        <hr className='hr-black' />
            <MDBRow>
                <MDBCol size='10'>
                     
                     <Form>
                     <Form.Group>
                            <Form.Label>Nombre</Form.Label>

                            <Form.Control type="text"
                                          name="nombre"
                                          onChange={handleInputChange}
                                         
                                       
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Apellido</Form.Label>

                            <Form.Control type="text"
                                          name="apellido"
                                          onChange={handleInputChange}
                                        
                            />
                        </Form.Group>

                       
                        <Form.Group>
                            <Form.Label>Nacionalidad</Form.Label>

                            <Form.Control type="text"
                                          name="nacionalidad"
                                          onChange={handleInputChange}
                            />
                        </Form.Group>
                        
                        
                        
                        <Form.Group>
                            <Form.Label>DNI</Form.Label>

                            <Form.Control type="text"
                                          name="Dni"
                                          onChange={handleInputChange}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Celular</Form.Label>

                            <Form.Control type="number"
                                          name="celular"
                                          onChange={handleInputChange}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Fecha de Nacimiento</Form.Label>

                            <Form.Control type="date"
                                          name="nacimiento"
                                          onChange={handleInputChange}
                            />
                        </Form.Group>
                        

                        <MDBBtn onClick={handleSave}>Guardar</MDBBtn>

                     </Form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

        
    )
}


export default FormularioDatosPersonales;