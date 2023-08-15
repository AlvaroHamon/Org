import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Formulario = () => {
  return (
    <section className="formulario">
      <form>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <CampoTexto nombre="nombre" placeholder="Ingresar Nombre" />
        <CampoTexto nombre="Puesto" placeholder="Ingresar Puesto" />
        <CampoTexto nombre="Foto" placeholder="Ingresar Enlace De Foto" />
        <ListaOpciones />
        <Boton nombre="Crear" />
      </form>
    </section>
  );
};
export default Formulario;
