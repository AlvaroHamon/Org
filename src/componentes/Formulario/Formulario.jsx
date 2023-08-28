import { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Formulario = () => {
  const manejarEnvio = (e) => {
    e.preventDefault();
    let datos = {
      nombre,
      puesto,
      foto,
      equipo
    };
    console.log(datos);
  };
  const [nombre, actualizarNombre] = useState("");
  const [puesto, actualizarPuesto] = useState("");
  const [foto, actualizarfoto] = useState("");
  const [equipo, actualizarEquipo] = useState("");
  const manejarCambios = (e) => {
    actualizarNombre(e.target.value);
  };

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <CampoTexto
          nombre="nombre"
          placeholder="Ingresar Nombre"
          required
          valor={nombre}
          actualizarValor={actualizarNombre}
        />
        <CampoTexto
          nombre="Puesto"
          placeholder="Ingresar Puesto"
          required
          valor={puesto}
          actualizarValor={actualizarPuesto}
        />
        <CampoTexto
          nombre="Foto"
          placeholder="Ingresar Enlace De Foto"
          required
          valor={foto}
          actualizarValor={actualizarfoto}
        />
        <ListaOpciones valor={equipo} actualizarEquipo={actualizarEquipo} />
        <Boton nombre="Crear" />
      </form>
    </section>
  );
};
export default Formulario;
