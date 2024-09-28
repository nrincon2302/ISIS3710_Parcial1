import Card from "react-bootstrap/Card";
import { RiArrowRightLine } from "react-icons/ri";

import './style.css';

function Robot(props) {
    // Arreglo manual para que traiga adecuadamente la imagen
    const imageURL = props.imagen + "?raw=true";

    if (props === null) {
        console.log(props);
        return null;
    }
    else return (
        <Card className='mb-3' style={{ width: "425px", height: "430px", background: '#f0ecec', 
                                        border: '1px solid black', borderRadius: '0'}}>
            <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Card.Title style={{ fontWeight: '700', fontSize: '18px' }}>
                    {props.nombre}
                </Card.Title>
                <img 
                    src={imageURL} 
                    alt={props.image} 
                    style={{width: '210px', height: '200px', marginBottom: '20px', border: '1px solid black' }}
                />
                <Card.Text style={{ fontSize: '18px', margin: '0 15px' }}>
                    <span style={{ fontWeight: 'bold' }}><RiArrowRightLine/> Año de Fabricación:</span> {props.añoFabricacion} 
                    <br/>
                    <span style={{ fontWeight: 'bold' }}><RiArrowRightLine/> Capacidad de Procesamiento:</span> {props.capacidadProcesamiento} 
                    <br/>
                    <span style={{ fontWeight: 'bold' }}><RiArrowRightLine/> Humor:</span> {props.humor} 
                    <br/>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Robot;