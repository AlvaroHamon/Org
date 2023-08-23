import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Formulario = () => {
  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log("Manejar el envio", e);
  };
  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <CampoTexto nombre="nombre" placeholder="Ingresar Nombre" required />
        <CampoTexto nombre="Puesto" placeholder="Ingresar Puesto" required />
        <CampoTexto nombre="Foto" placeholder="Ingresar Enlace De Foto" required />
        <ListaOpciones />
        <Boton nombre="Crear" />
      </form>
    </section>
  );
};
export default Formulario;
