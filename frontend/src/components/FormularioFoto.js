import React, {useState,useEffect} from 'react';
import { MDBContainer, MDBCol, MDBIcon, MDBRow, MDBBtn} from 'mdbreact';
import Form from 'react-bootstrap/Form';
import "../styles/FormularioRegistro.css";


const FormularioFoto=( props ) =>{

    const [foto, setFoto] = useState('');
    const [previewFoto, setPreviewFoto] = useState('');


    const handleFotoChange = event =>{
        setFoto(event.target.files[0]);

        setPreviewFoto(URL.createObjectURL(event.target.files[0]));
    }

    useEffect(
        ()=>{

            if (props.usuario){
                
                fetch(`http://localhost:8888/usuarios/` + props.usuario.id).then(
                    response => response.json()
                ).then(
                    data =>{
                        setPreviewFoto(data.usuario_imagen);
                    }
                )

            }else{

            }
        }, []
    )



    const handleSave = (event)=>{

        const formData = new FormData();

        formData.append('fotoPerfil', foto);

        let url    = 'http://localhost:8888/perfilFoto';
        let method = 'PUT';

        fetch(url, {
            method: method,
            body: formData,
            credentials: 'include'
        })
        .then( response => response.json() )
        .then( data => {

            console.log(data);

        })
        .catch( error => {
            console.log('Error');
        })
    }

    return(

        <MDBContainer>
        <MDBIcon icon='user' className="orange-text"  /> Tu Foto de Perfil:
        <hr className='hr-black' />
            <MDBRow>
                <MDBCol size='10'>
                <Form>
                    
                    <Form.Label>Carga tu foto:</Form.Label>
                    <Form.File 
                        id="custom-file"
                        onChange={handleFotoChange}
                        label='Carga tu foto'
                        custom
                    />
                    <Form.Group className="d-flex justify-content-center">
                        <img style={{height: "40vh"}} src={previewFoto} alt='' ></img>
                    </Form.Group>
                </Form>

                

                <MDBBtn onClick={handleSave}>Guardar Foto de Perfil</MDBBtn>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

        
    )
}


export default FormularioFoto;