import React, {useState} from 'react';
import {MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBIcon, MDBInput, MDBCardFooter, MDBBtn} from 'mdbreact';
import "../styles/FormularioRegistro.css";


const FormularioRegistro=(props) =>{

    const [datos, setDatos] = useState({
        nombre:         '',
        apellido:       '',
        email:          '',
        dni:            '',
        celular:        '',
        pass:           '',
        repetirpass:    '',
    });

    const handleInputChange = (event) => {
 
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const loguear = () => {
        let url= 'http://localhost:8888/auth';
    
        let params= {
                    mail: datos.email,
                    password: datos.pass
                    }

        fetch(url, {
                    method:'POST',
                    credentials: 'include',
                    body: JSON.stringify( params ),
                    headers: {
                                'Content-Type' : 'application/json'
                            }

                    }
        ).then( response => response.json() )
        .then( data => {
            if (data.status === 'ok'){
            props.handleLoginSucces(data.loggedUser);
            }else {
            alert(data.message);
            }
        })
    }

    const handleSave = (event) =>{

        if(datos.pass === datos.repetirpass){

            
            const formData = new FormData();
    
            formData.append('nombre', datos.nombre);
            formData.append('apellido', datos.apellido);
            formData.append('mail', datos.email);
            formData.append('celular', datos.celular);
            formData.append('dni', datos.dni);
            formData.append('pass', datos.pass);
            formData.append('tipo', props.tipo);
    
            fetch('http://localhost:8888/registro',{
                method:'POST',
                body: formData,
                credentials:'include'
            })
            .then( response => response.json())
            .then( data => {
                alert(data.message);

                if (data.status === 'ok'){
                    loguear(datos.email, datos.pass);
                }else{
                    alert('No pudo loguear');
                }
            })
            .catch(error => {
                console.log('Error')
            })

        }else{
            alert('Las contraseñas deben ser iguales');
        }
    }

    return(
        <MDBCard id='classic-card' >
            <MDBCardTitle className='white-text text-center mt-3'>
                <MDBIcon icon='user' className="orange-text"  /> Registro:
                <hr className='hr-light' />
            </MDBCardTitle>
            <MDBCardBody className="white-text">
                <form>
                    <MDBRow>
                        <MDBCol md="6">
                            <MDBInput className="white-text" name="nombre" onChange={handleInputChange} label="Nombre" icon="user" iconClass="orange-text" type="text"/>
                        </MDBCol>
                        
                        <MDBCol md="6">
                            <MDBInput className="white-text" name="apellido" onChange={handleInputChange} label="Apellido" icon="user" iconClass="orange-text" type="text"/>
                        </MDBCol>
                        
                        <MDBCol md="6">
                            <MDBInput className="white-text" name="email" onChange={handleInputChange} label="Email" icon="envelope" iconClass="orange-text" type="text"/>
                        </MDBCol>
                        
                        <MDBCol md="6">
                            <MDBInput className="white-text" name="dni" onChange={handleInputChange} label="DNI" icon="address-card" iconClass="orange-text" type="text"/>
                        </MDBCol>
                        
                        <MDBCol md="6">
                            <MDBInput className="white-text" name="celular" onChange={handleInputChange} label="Celular" icon="mobile-alt" iconClass="orange-text" type="text"/>
                        </MDBCol>
                        
                        <MDBCol md="6">
                            <MDBInput className="white-text" name="pass" onChange={handleInputChange} label="Contraseña" icon="lock" iconClass="orange-text" type="password"/>
                        </MDBCol>
                        
                        <MDBCol md="6">
                            <MDBInput className="white-text" name="repetirpass" onChange={handleInputChange} label="Repetir Contraseña" icon="lock" iconClass="orange-text" type="password"/>
                        </MDBCol>
                    </MDBRow>
                </form>
            </MDBCardBody>
            <MDBCardFooter>
                <MDBBtn onClick={handleSave}>Registrarte como {props.tipo}</MDBBtn>
            </MDBCardFooter>
        </MDBCard>
    )
}


export default FormularioRegistro;