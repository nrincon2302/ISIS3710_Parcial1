import Card from "react-bootstrap/Card";
import { RiArrowRightLine } from "react-icons/ri";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import './style.css';

import { FormattedMessage } from "react-intl";

function Robot() {
    const params = useParams();
    const [robot, setRobot] = useState([]);

    useEffect(() => {
        const URL = "http://localhost:3001/robots/" + params.robotId;
        fetch(URL)
          .then((data) => data.json())
          .then((data) => {
            console.log(data);
            setRobot(data);
          });
      }, [params.robotId]);

    // Arreglo manual para que traiga adecuadamente la imagen
    const imageURL = `https://raw.githubusercontent.com/fai-aher/T34-Wiki-Backup/refs/heads/main/images/robot${params.robotId}.png`;

    return (
        <Card className='mb-3' style={{ width: "425px", height: "430px", background: '#f0ecec', 
                                        border: '1px solid black', borderRadius: '0'}}>
            <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Card.Title style={{ fontWeight: '700', fontSize: '18px' }}>
                    {robot.nombre}
                </Card.Title>
                <img 
                    src={imageURL} 
                    alt={robot.imagen} 
                    style={{width: '210px', height: '200px', marginBottom: '20px', border: '1px solid black' }}
                />
                <Card.Text style={{ fontSize: '18px', margin: '0 15px' }}>
                    <span style={{ fontWeight: 'bold' }}>
                        <RiArrowRightLine/> 
                        <FormattedMessage id="Year"/>:
                    </span> {robot.añoFabricacion} 
                    <br/>
                    <span style={{ fontWeight: 'bold' }}>
                        <RiArrowRightLine/> 
                        <FormattedMessage id="Capacity"/>:
                    </span> {robot.capacidadProcesamiento} 
                    <br/>
                    <span style={{ fontWeight: 'bold' }}>
                        <RiArrowRightLine/> 
                        <FormattedMessage id="Mood"/>:
                    </span> {robot.humor} 
                    <br/>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Robot;