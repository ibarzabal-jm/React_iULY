import React, {useState}  from 'react';
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBInput } from 'mdbreact';


export default (props) => {

  const handleLoginClick = () =>{
    let url= 'http://localhost:8888/auth';
    
    let params= {
                  mail: mailUsuario,
                  password: passwordUsuario
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
          props.handleHide();
        }else {
          alert(data.message);
        }
      })
  }
  
  const[mailUsuario, setMailUsuario] = useState('');
  const[passwordUsuario, setPasswordUsuario] = useState('');
  
  const handleMailChange =(event) => {
    setMailUsuario(event.target.value);
  }
  const handlePasswordChange =(event) => {
    setPasswordUsuario(event.target.value)
  }


  return(
  
    <MDBModal className="modal-notify modal-warning" isOpen={ props.isOpen } handleHide={ props.handleHide }>
      <MDBModalHeader className="text-center" titleClass="w-100 font-weight-bold" toggle={props.handleHide}>Inicia Sesión</MDBModalHeader>
      <MDBModalBody className="mx-3" >
        <form className="mx-3 grey-text">
          
          <MDBInput label="Ingresa tu mail" labelClass="blue-text" icon="envelope" group iconClass="blue-text"  type="email" 
                    value={mailUsuario} 
                    onChange={handleMailChange}
            />

          <MDBInput label="Tu contraseña" labelClass="blue-text" icon="lock" group iconClass="blue-text" type="password"
                    value={passwordUsuario}
                    onChange={handlePasswordChange}
          />
        
        </form>
      </MDBModalBody>
      <MDBModalFooter className="justify-content-center">
        <MDBBtn className="mb-4" color="info"  onClick={ handleLoginClick }>Iniciá Sesión
        <MDBIcon icon="sign-in-alt" className="ml-2" />
        </MDBBtn>
      </MDBModalFooter>
    </MDBModal>
  )

}  

