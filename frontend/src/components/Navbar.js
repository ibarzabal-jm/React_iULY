import React, {useState} from 'react';
import {
    MDBNavbar,  MDBNavbarNav, MDBNavItem,  MDBNavbarToggler, MDBCollapse,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBContainer, MDBLink
    } from "mdbreact";

import {Link} from 'react-router-dom'

import LoginModal from './LoginModal';
import logo from '../images/iULY_logo.png';
import "../styles/Navbar.css";





const Navbar = (props) => {

    const [showLoginModal, setShowLoginModal] = useState(false);
    const [collapse, setCollapse] = useState(false);

    const handleHideLoginModal = () =>{
        setShowLoginModal(false);
    }

    const handleShowLoginModal = () =>{
        setShowLoginModal(true);
    }
    

    const showCollapse = () =>{
        
        collapse ? setCollapse(false) :setCollapse(true);
    }

    return(
        <>
            <MDBNavbar id="navbar-iuly" dark expand="md" fixed="top" scrolling>
                <MDBContainer>

                    <Link to={"/"}>
                        <img alt="logo-iULY" style={{ width:"100px", height : "40px", marginRight : "0.5rem" }} src={logo}></img>
                    </Link>

                    <MDBNavbarToggler right onClick={ showCollapse  } />
                    <MDBCollapse isOpen={collapse} navbar>
                        <MDBNavbarNav right>
                            {   !props.user
                                    ?
                                        <>
                                            <MDBNavItem>
                                                <MDBLink to="/registroEmpleador" style={{borderRadius: '30px'}}>Contratá iULY</MDBLink>
                                            </MDBNavItem>

                                            <MDBNavItem>
                                                <MDBLink to="/registroTrabajador" style={{borderRadius: '30px'}} >Resgistrarse como iULY </MDBLink>   
                                            </MDBNavItem>
                                            
                                            <MDBNavItem active onClick={handleShowLoginModal} >
                                                    <MDBLink style={{borderRadius: '30px'}} > Iniciar sesión </MDBLink>
                                            </MDBNavItem> 
                                        </>
                                    
                                    :

                                        <>
                                                {   (props.user.tipo === 'Trabajador')
                                                        ?

                                                            <>
                                                                <MDBNavItem>
                                                                    <MDBLink to="/listadoPedidos">Buscar trabajos</MDBLink>
                                                                </MDBNavItem>
                                                                <MDBNavItem>
                                                                    <MDBLink to="/Calendario">Mi calendario</MDBLink>                                                                    
                                                                </MDBNavItem>
                                                            </>
                                                        :
                                                            <>
                                                                <MDBNavItem>
                                                                    <MDBLink to="/listadoIULY">Buscá tu siguiente iULY</MDBLink>
                                                                </MDBNavItem>
                                                                <MDBNavItem>
                                                                    <MDBLink to="/misPedidos">Mis Pedidos</MDBLink>                                                                    
                                                                </MDBNavItem>
                                                            </>
                                                

                                                }
                                                <MDBNavItem>
                                                    <MDBDropdown>
                                                        <MDBDropdownToggle nav caret>
                                                            <MDBIcon icon="user" mr="6">  {props.user.nombre} </MDBIcon>
                                                        </MDBDropdownToggle>
                                                        <MDBDropdownMenu className="dropdown-default" right>
                                                            <MDBLink to="/miCuenta"><MDBDropdownItem>Mi Cuenta</MDBDropdownItem></MDBLink>
                                                            {
                                                                (props.user.tipo === 'Trabajador')
                                                                    ?

                                                                        <>
                                                                            <MDBLink to="/misCobros"><MDBDropdownItem>Mis Cobros</MDBDropdownItem></MDBLink>
                                                                            <MDBLink to="/misVisitas"><MDBDropdownItem>Mis Visitas</MDBDropdownItem></MDBLink>
                                                                            <MDBLink to="/miCalendario"><MDBDropdownItem>Mi Calendario</MDBDropdownItem></MDBLink>
                                                                        </>

                                                                    :

                                                                        <>
                                                                            <MDBLink to="/miCuenta"><MDBDropdownItem>Mis Pedidos</MDBDropdownItem></MDBLink>
                                                                            <MDBLink to="/miCuenta"><MDBDropdownItem>Mis Favoritos</MDBDropdownItem></MDBLink>
                                                                        </>
                                                            }
                                                            
                                                            <MDBLink to="/miCuenta"><MDBDropdownItem>Mi Historial</MDBDropdownItem></MDBLink>
                                                            <MDBLink to="/miCuenta"><MDBDropdownItem>Ayuda en línea</MDBDropdownItem></MDBLink>
                                                            <MDBDropdownItem divider />
                                                            <MDBDropdownItem onClick={props.handleLogout}> Cerrar sesion</MDBDropdownItem>
                                                        </MDBDropdownMenu>
                                                    </MDBDropdown>
                                                </MDBNavItem>
                                        </>




                            }
                        </MDBNavbarNav>
                    </MDBCollapse>
                        
                  
                                            
                       

                    

                </MDBContainer>
            </MDBNavbar>

        <LoginModal isOpen={showLoginModal} 
                    handleHide={handleHideLoginModal}
                    handleLoginSucces={props.handleLoginSucces}
        />
        
        </>

    )
}

export default Navbar;


    


