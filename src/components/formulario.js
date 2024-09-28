import { React } from 'react';

import { Form, Button, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useState } from 'react';
import './style.css'


function Formulario() {
    const [nombre, setNombre] = useState('');
    const [password, setPassword] = useState('');

    const handleNameChange = (event) => {
        setNombre(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        console.log(nombre);
        console.log(password);
    }
    
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs lg="5" className="text-center">
                    <h2 className='textoForms'>Inicio de Sesión</h2>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg="5">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='labelForms'
                                style={{fontSize: '20px', color: '#000000', fontWeight: 'bold'}}>
                                Nombre de Usuario
                            </Form.Label>
                            <Form.Control className='inputForms' style={{backgroundColor: '#e0dcdc', borderRadius: '0', padding: '10px'}}
                                type="text" 
                                onChange={handleNameChange} 
                                value={nombre}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className='labelForms'
                                style={{fontSize: '20px', color: '#000000', fontWeight: 'bold'}}>
                                Contraseña
                            </Form.Label>
                            <Form.Control className='inputForms' style={{backgroundColor: '#e0dcdc', borderRadius: '0', padding: '10px'}}
                                type="password" 
                                onChange={handlePasswordChange} 
                                value={password}
                            />
                        </Form.Group>
                        <Row xs="auto" className="d-flex justify-content-between">
                            <Col>
                                <Button style={{width: '225px', fontSize: '20px', borderRadius: '0', 
                                                fontWeight: '550', color: '#fff', background: '#083c94'}}
                                    className='btn-submit' variant="primary" type='submit'>
                                    Ingresar
                                </Button>
                            </Col>
                            <Col xs="auto"/>
                            <Col >
                            <Button style={{width: '225px', fontSize: '20px', borderRadius: '0',
                                            fontWeight: '550', color: '#000000', background: '#e75d5d'}}
                                className='btn-danger' variant="primary" type='cancel'>
                                Cancelar
                            </Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Formulario;