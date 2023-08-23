import "./ListaOpciones.css";

const ListaOpciones = () => {
  const equipos = [
    "Programación",
    "Front End",
    "Data Science",
    "Dev Ops",
    "UX y Diseño",
    "Movil",
    "Innovación y Gestión",
  ];

  return (
    <div className="lista-opciones">
      <label htmlFor="">Grupo</label>
      <select name="" id="">
        {equipos.map((equipo, index) => (
          <option key={index}>{equipo}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaOpciones;
