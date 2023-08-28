import "./Equipo.css";

const Equipo = (props) => {
  const { linea, fondo, titulo } = props.datos;
  const colorFondo = { backgroundColor: fondo };
  const colorLinea = { borderColor: linea };

  return (
    <section className="equipo" style={colorFondo}>
      <h3 style={colorLinea}>{titulo}</h3>
      <div className="colaboradores"></div>
    </section>
  );
};

export default Equipo;
