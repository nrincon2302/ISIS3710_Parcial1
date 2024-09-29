import { React } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Robot from './robot';
import './style.css'

import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { FormattedMessage } from "react-intl";

function Listado(props) {
    const [robots, setRobots] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
      const URL = "http://localhost:3001/robots";
      fetch(URL)
        .then((data) => data.json())
        .then((data) => {
          setRobots(data);
        });
    }, []);

    const handleRowClick = (robotID) => {
      // Navegamos a la ruta deseada
      navigate(`/robots/${robotID}`);
    };

    return (
        <Container style={{marginBottom: '30px'}}>
          <Row className="justify-content-md-center">
          <Col>
          <table>
            <thead>
              <tr>
                <th><FormattedMessage id="Id"/></th>
                <th><FormattedMessage id="Name"/></th>
                <th><FormattedMessage id="Model"/></th>
                <th><FormattedMessage id="Company"/></th>
              </tr>
            </thead>
            <tbody>
              {robots.map((robot) => (
                <tr key={robot.id} style={{ borderBottom: '1px solid #ccc', cursor: 'pointer' }} 
                    onClick={() => handleRowClick(robot.id)} >
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
            {props.ruta ? <Robot /> : null}
          </Col>
          </Row>
        </Container>
      );
     }
    
export default Listado;