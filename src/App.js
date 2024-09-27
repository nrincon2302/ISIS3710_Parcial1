import './App.css';
import Formulario from './components/formulario';
import { Image } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Listado from './components/listado';
import Robot from './components/robot';

function App() {
  return (
    <>
    <h1 className='align-center'>Adopta un Robot con Robot Lovers!</h1>
    <Image src="https://www.istockphoto.com/photo/robot-love-gm1280000007-378000000" fluid />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Formulario />} />
        <Route path="/robots" element={<Listado />} />
      </Routes>
    </BrowserRouter>
    <p></p>
    </>
  );
}

export default App;
