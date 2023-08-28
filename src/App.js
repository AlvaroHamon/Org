import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Lista de equipos
  const equipos = [
    {
      titulo: "Programación",
      linea: "#57C278",
      fondo: "#D9F7E9",
    },

    {
      titulo: "Front End",
      linea: "#82CFFA",
      fondo: "#E8F8FF"
    },

    {
      titulo: "Data Science",
      linea: "#A6D157",
      fondo: "#F0F8E2"
    },

    {
      titulo: "Dev Ops",
      linea: "#E06B69",
      fondo: "#FDE7E8"
    },

    {
      titulo: "UX y Diseño",
      linea: "#DB6EBF",
      fondo: "#FAE9F5"
    },

    {
      titulo: "Movil",
      linea: "#FFBA05",
      fondo: "#FFF5D9"
    },

    {
      titulo: "Innovación y Gestión",
      linea: "#FF8A29",
      fondo: "#FFEEDF"
    }
  ];

  return (
    <div>
      <Header />
      {/* {mostrarFormulario ? <Formulario /> : <></>} */}
      {mostrarFormulario && <Formulario equipos={equipos.map(equipos => equipos.titulo)} />}
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {equipos.map((equipo) => <Equipo datos={equipo} key={equipo.titulo} />)}

      <Footer />
    </div>
  );
}

export default App;
