import { React } from 'react';

import { Form, Button, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'

import { FormattedMessage } from "react-intl";

function Formulario() {
    const [nombre, setNombre] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleNameChange = (event) => {
        setNombre(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = () => {
        fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({login: nombre, password: password}), // Convertir los datos a JSON
        })
        .then(response => response.json()) // Procesar la respuesta como JSON
        .then(result => {
            (result.status === 'success' ? navigate('/robots') : setError(<FormattedMessage id="AuthError"/>));
            console.log(result);
        })
        .catch(error => {
            setError(<FormattedMessage id="AuthError"/>);
            console.log(error);
        });
    }

    const handleCancel = () => {
        navigate('/');
        setNombre('');
        setPassword('');
        setError('');
    }
    
    return (
        <Container style={!error ? {marginBottom: '100px'} : {marginBottom: '37px'}}>
            <Row className="justify-content-md-center">
                <Col xs lg="5" className="text-center">
                    <h2 className='textoForms'><FormattedMessage id="LoginTitle"/></h2>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg="5">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='labelForms'
                                style={{fontSize: '20px', color: '#000000', fontWeight: 'bold'}}>
                                <FormattedMessage id="Username"/>
                            </Form.Label>
                            <Form.Control className='inputForms' style={{backgroundColor: '#e0dcdc', borderRadius: '0', padding: '10px'}}
                                type="text" 
                                onChange={handleNameChange} 
                                value={nombre}
                                isInvalid={error}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className='labelForms'
                                style={{fontSize: '20px', color: '#000000', fontWeight: 'bold'}}>
                                <FormattedMessage id="Password"/>
                            </Form.Label>
                            <Form.Control className='inputForms' style={{backgroundColor: '#e0dcdc', borderRadius: '0', padding: '10px'}}
                                type="password" 
                                onChange={handlePasswordChange} 
                                value={password}
                                isInvalid={error}
                            />
                        </Form.Group>
                        <Row xs="auto" className="d-flex justify-content-between">
                            <Col>
                                <Button style={{width: '225px', fontSize: '20px', borderRadius: '0', 
                                                fontWeight: '550', color: '#fff', background: '#083c94'}}
                                    className='btn-submit' variant="primary" onClick={() => handleSubmit()}>
                                    <FormattedMessage id="LoginButton"/>
                                </Button>
                            </Col>
                            <Col xs="auto"/>
                            <Col >
                            <Button style={{width: '225px', fontSize: '20px', borderRadius: '0',
                                            fontWeight: '550', color: '#000000', background: '#e75d5d'}}
                                className='btn-danger' variant="primary" onClick={() => handleCancel()}>
                                <FormattedMessage id="CancelButton"/>
                            </Button>
                            </Col>
                        </Row>
                        {error && <p className="error-message">{error}</p>}
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Formulario;