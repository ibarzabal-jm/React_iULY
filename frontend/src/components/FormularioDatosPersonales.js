import React, {useState, useEffect} from 'react';
import { MDBContainer, MDBCol, MDBIcon, MDBRow, MDBBtn} from 'mdbreact';
import Form from 'react-bootstrap/Form';
import "../styles/FormularioRegistro.css";


const FormularioDatosPersonales=( props ) =>{

    const [datos, setDatos] = useState({
        nombre:         '',
        apellido:       '', 
        nacionalidad:   '',
        dni:            '',
        celular:        '',
        nacimiento:     '',


    });

    const cargarDatos = () => {
        if (props.usuario){
            
            fetch(`http://localhost:8888/usuarios/` + props.usuario.id).then(
                response => response.json()
            ).then(
                data =>{
                    setDatos({
                        ...datos,
                        nombre : data.usuario_nombre,
                        apellido: data.usuario_apellido,
                        nacionalidad:   data.usuario_nacionalidad,
                        dni:            data.usuario_dni,
                        celular:        data.usuario_celular,
                        nacimiento:     data.nacimiento,
                    })
                }
            )
    
        }

    }

    useEffect( cargarDatos , [] );

    const handleInputChange = (event) => {
 
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const handleSave = (event) =>{
       
        console.log('Enviando datos' + datos.nacimiento);
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
                                          value = {datos.nombre}
                                          
                                         
                                       
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Apellido</Form.Label>

                            <Form.Control type="text"
                                          name="apellido"
                                          onChange={handleInputChange}
                                          value = {datos.apellido}
                                        
                            />
                        </Form.Group>

                       
                        <Form.Group>
                            <Form.Label>Nacionalidad</Form.Label>

                            <Form.Control type="text"
                                          name="nacionalidad"
                                          onChange={handleInputChange}
                                          value = { datos.nacionalidad }
                            />
                        </Form.Group>
                        
                        
                        
                        <Form.Group>
                            <Form.Label>DNI</Form.Label>

                            <Form.Control type="text"
                                          name="Dni"
                                          onChange={handleInputChange}
                                          value = { datos.dni }
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Celular</Form.Label>

                            <Form.Control type="number"
                                          name="celular"
                                          onChange={handleInputChange}
                                          value = { datos.celular }
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Fecha de Nacimiento</Form.Label>

                            <Form.Control type="date"
                                          name="nacimiento"
                                          onChange={handleInputChange}
                                          value = { datos.nacimiento }
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