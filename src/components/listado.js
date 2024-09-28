import { React } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Robot from './robot';
import './style.css'

const { useEffect, useState } = require("react");


function Listado() {
    const [robots, setRobots] = useState([]);
    const [selectedRobot, setSelectedRobot] = useState(null);

    const showDetail = (robot) => {
      setSelectedRobot(robot);
    }

    useEffect(() => {
      const URL = "http://localhost:3001/robots";
      fetch(URL)
        .then((data) => data.json())
        .then((data) => {
          setRobots(data);
        });
    }, []);

    return (
        <Container style={{marginBottom: '30px'}}>
          <Row className="justify-content-md-center">
          <Col>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Modelo</th>
                <th>Empresa Fabricante</th>
              </tr>
            </thead>
            <tbody>
              {robots.map((robot) => (
                <tr key={robot.id} style={{ borderBottom: '1px solid #ccc' }} onClick={() => showDetail(robot)}>
                  <td style={{fontWeight: 'bold'}}>{robot.id}</td>
                  <td>{robot.nombre}</td>
                  <td>{robot.modelo}</td>
                  <td>{robot.empresaFabricante}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </Col>
          <Col xs='auto'/>
          <Col xs={4}>
            {selectedRobot ? <Robot {...selectedRobot}/> : null}
          </Col>
          </Row>
        </Container>
      );
     }
    
export default Listado;