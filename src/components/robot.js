import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";

function Robot(props) {
    return (
        <Card style={{ width: "18rem", height: "24rem" }} className="mb-3">
            <Card.Body>
                <Card.Title>Robot</Card.Title>
                <Card.Text>
                    <Image src={props.imagen} fluid />
                    <p>Nombre: {props.nombre}</p>
                    <p>Modelo: {props.modelo}</p>
                    <p>Capacidad de Procesamiento: {props.capacidadProcesamiento}</p>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Robot;