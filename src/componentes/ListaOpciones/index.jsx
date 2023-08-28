import "./ListaOpciones.css";

const ListaOpciones = (props) => {
  const equipos = [
    "Programación",
    "Front End",
    "Data Science",
    "Dev Ops",
    "UX y Diseño",
    "Movil",
    "Innovación y Gestión",
  ];
  const manejarCambio= (e)=>{
    props.actualizarEquipo(e.target.value)
  }

  return (
    <div className="lista-opciones">
      <label>Grupo</label>
      <select value={props.valor} onChange={manejarCambio}>
        <option value="" defaultValue={""} hidden>
          Seleccionar Equipo
        </option>
        {equipos.map((equipo, index) => (
          <option key={index}>{equipo}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaOpciones;
