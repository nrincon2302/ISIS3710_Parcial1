import { React } from 'react';
import { Row, Col } from 'react-bootstrap';
import Robot from './robot';
import './style.css'

const { useEffect, useState } = require("react");

function Listado() {
    const [robots, setRobots] = useState([]);

    useEffect(() => {
      const URL = "http://localhost:3001/robots";
      fetch(URL)
        .then((data) => data.json())
        .then((data) => {
          setRobots(data);
          console.log(data);
        });
    }, []);

    return (
        <div className="container">
          <hr></hr>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Modelo</th>
                <th>Empresa Fabricante</th>
              </tr>
            </thead>
            <tbody>
              {robots.map((robot) => (
                <tr key={robot.id} >
                  <td>{robot.id}</td>
                  <td>{robot.nombre}</td>
                  <td>{robot.modelo}</td>
                  <td>{robot.empresaFabricante}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
     }
    
export default Listado;