import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';


const Calendario = () => {
    return (
      <MDBTable  bordered
      small responsive>
        <MDBTableHead color="orange" textWhite>
          <tr>
            <th>Hora</th>
            <th>Lunes</th>
            <th>Martes</th>
            <th>Miércoles</th>
            <th>Jueves</th>
            <th>Viernes</th>
            <th>Sábado</th>
            <th>Domingo</th>
          </tr>

        </MDBTableHead>
        <MDBTableBody>
          <tr>
            <th style={{backgroundColor: 'blue', color: 'white'}}>06:00</th>
            <td >Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td></td>
          </tr>
          <tr>
            <th style={{backgroundColor: 'blue', color: 'white'}}>07:00</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th style={{backgroundColor: 'blue', color: 'white'}}>08:00</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th style={{backgroundColor: 'blue', color: 'white'}}>09:00</th>
          </tr>
          <tr>
            <th style={{backgroundColor: 'blue', color: 'white'}}>10:00</th>
          </tr>
          <tr>
            <th style={{backgroundColor: 'blue', color: 'white'}}>11:00</th>
          </tr>
          <tr>
            <th style={{backgroundColor: 'blue', color: 'white'}}>12:00</th>
          </tr>
          <tr>
            <th style={{backgroundColor: 'blue', color: 'white'}}>13:00</th>
          </tr>
          <tr>
            <th style={{backgroundColor: 'blue', color: 'white'}}>14:00</th>
          </tr>
          <tr>
            <th style={{backgroundColor: 'blue', color: 'white'}}>15:00</th>
          </tr>
          <tr>
            <th style={{backgroundColor: 'blue', color: 'white'}}>16:00</th>
          </tr>
          <tr>
            <th style={{backgroundColor: 'blue', color: 'white'}}>17:00</th>
          </tr>
          <tr>
            <th style={{backgroundColor: 'blue', color: 'white'}}>18:00</th>
          </tr>
          <tr>
            <th style={{backgroundColor: 'blue', color: 'white'}}>19:00</th>
          </tr>
          <tr>
            <th style={{backgroundColor: 'blue', color: 'white'}}>20:00</th>
          </tr>
          <tr>
            <th style={{backgroundColor: 'blue', color: 'white'}}>21:00</th>
          </tr>
          <tr>
            <th style={{backgroundColor: 'blue', color: 'white'}}>22:00</th>
          </tr>
          <tr>
            <th style={{backgroundColor: 'blue', color: 'white'}}>23:00</th>
          </tr>
        </MDBTableBody>
      </MDBTable>
    );
  }
  
  export default Calendario;