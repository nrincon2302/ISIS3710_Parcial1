import { React } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';

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
            <h1>Inicio de Sesión</h1>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre de Usuario</Form.Label>
                <Form.Control type="text" onChange={handleNameChange} value={nombre}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" onChange={handlePasswordChange} value={password}/>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={() => handleSubmit()}>
                Ingresar
            </Button>
            <Button variant="primary" type="cancel">
                Cancelar
            </Button>
        </Form>
        </Row>
        </Container>
    )
}

export default Formulario;