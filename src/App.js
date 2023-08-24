import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Footer from './componentes/Footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  return (
    <div>
      <Header />
      {mostrarFormulario ? <Formulario /> : <></>}
      <MiOrg cambiarMostrar={cambiarMostrar} />
      <Footer />
    </div>
  );
}

export default App;
