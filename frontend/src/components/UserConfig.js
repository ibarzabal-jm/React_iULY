import React from 'react';

import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'

import FormularioDatosPersonales from './FormularioDatosPersonales';
import FormularioDireccion from './FormularioDirección';
import FormularioFoto from './FormularioFoto';
import Calendario from './Calendario';
import FormularioPedidos from './FormularioPedidos';
import TarjetaiULY from './TarjetaiULY';



const ConfigurationUser = (props) => {
    

    
    

    
    return(
        <Tab.Container id="left-tabs-example" defaultActiveKey="datosPersonales">
            <Row>
                <Col sm={3}>
                <Nav variant="pills" className="flex-column">

                    <Nav.Item>
                        <Nav.Link eventKey="tercero">Tu tarjeta de Perfil en iUlY</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="datosPersonales"> <i className="fas fa-cog mr-2"></i>Tus datos Personales</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="direccion">Tu Dirección</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="foto">Foto de Perfil</Nav.Link>
                    </Nav.Item>
                </Nav>
                </Col>
                <Col sm={9}>
                <Tab.Content> 
                    <Tab.Pane eventKey="tercero">
                        <TarjetaiULY usuario = {props.user}></TarjetaiULY>
                    </Tab.Pane>
                    <Tab.Pane eventKey="datosPersonales">
                        <FormularioDatosPersonales usuario={props.user} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="direccion">
                        <FormularioDireccion usuario={props.user} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="foto">
                        <FormularioFoto usuario={props.user} />
                    </Tab.Pane>
                </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    )
}



export default ConfigurationUser;

