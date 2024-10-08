import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Row, Col, Image } from 'react-bootstrap';

import Formulario from './components/formulario';
import Listado from './components/listado';

import './App.css';
import banner from './images/banner.png';

import { FormattedMessage } from "react-intl";

function App() {
  return (
    <>
      <Container className='inicio'>
        <Row className="justify-content-center">
          <Col sm="8" className="text-center">
            <h1 className='banner'><FormattedMessage id="Banner"/></h1>
          </Col>
          <hr className='custom-hr'></hr>
          <Col sm="10" className="robot-image">
            <Image src={banner} alt='Adopta un Robot' fluid />
          </Col>
        </Row>
        <hr className='custom-hr'></hr>
      </Container>
      {/* Enrutamiento a los diferentes servicios de la aplicación */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Formulario />} />
          <Route path="/robots" element={<Listado ruta={false}/>} />
          <Route path="/robots/:robotId" element={<Listado ruta={true}/>}/>
        </Routes>
      </BrowserRouter>
      <footer>
        <p><FormattedMessage id="Footer"/></p>
      </footer>
    </>
    );
}

export default App;
