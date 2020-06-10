import React, {useState} from 'react';
import './App.css';

import Navbar from './components/Navbar'
import Footer from './components/Footer';

import Principal from './components/Principal'
import ListadoiULY from './components/ListadoiULY';
import ContrataNuestrosServicios from './components/ContrataNuestrosServicios';
import SeDeNuestroEquipo from './components/SeDeNuestroEquipo';
import ComoFuncionaElServicio from './components/ComoFuncionaElServicio';
import RegistroiULY from './components/RegistroiULY';
import RegistroCliente from './components/RegistroCliente'

import{
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Espaciado from './components/Espaciado';
import IULYDetail from './components/IULYDetail';
import Calendario from './components/Calendario';
import ListadoPedidos from './components/ListadoPedidos';
import UserConfig from './components/UserConfig'






function App() {

  const [usuario, setUsuario] = useState(null);
  const onLoginSucces = (loggedUser) =>{
    setUsuario(loggedUser);
  }
  
  const onLogout = ()=>{

    let url = 'http://localhost:8888/auth';

    fetch(url, {
                  method: 'DELETE',
                  credentials : 'include'
               }
    ).then( response => response.json() )
     .then( data => {
                      setUsuario(null);
                    }
     )

  }

  return (
    <>
      <Router>
       
        <Navbar user={usuario}
                handleLoginSucces= {onLoginSucces}
                handleLogout = {onLogout}
        />
        
        <Switch>

          <Route exact path="/"
                children={
                  <>
                    <Principal />
                    <ContrataNuestrosServicios />
                    <SeDeNuestroEquipo />
                    <ComoFuncionaElServicio />
                  </>
                }
          
          />


          <Route exact path="/registroTrabajador"
                  children={ <RegistroiULY 
                                        user={usuario}
                                        handleLoginSucces= {onLoginSucces}
                                        handleLogout = {onLogout}
                    /> } 
          />

          <Route exact path="/registroEmpleador"
                  children={ <RegistroCliente
                                        user={usuario}
                                        handleLoginSucces= {onLoginSucces}
                                        handleLogout = {onLogout}
                    /> } 
          />

          <Route exact path="/listadoiULY"
                  children={ 
                  <>
                    <Espaciado />
                    <ListadoiULY /> 
                  </>
                  } 
          />

          <Route exact path="/listadoPedidos"
                  children={
                    <>
                      <Espaciado />
                      <ListadoPedidos />
                    </>
                  }
          />

          <Route exact path="/iULY/:id"
                       children={ 
                        <>
                          <Espaciado />
                          <IULYDetail /> 
                        </>
                        } 
          />

          
          <Route exact path="/micuenta"
                          children={ 
                            <>
                              <Espaciado />
                              <UserConfig user={usuario}/>
                              
                            </>
                            } 
         />

         <Route exact path="/calendario"
                          children={ 
                            <>
                              <Espaciado />
                              <Calendario />
                              
                            </>
                            } 
         />
          

          <Redirect to= { { pathname= '/' } } />


        </Switch>

        <Footer />
        
      </Router>


    </>
  );
}

export default App;
