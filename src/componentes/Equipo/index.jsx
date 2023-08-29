import Colaborador from "../Colaborador";
import "./Equipo.css";

const Equipo = (props) => {
  //props para el estilo CSS
  const { colorPrimario, colorSecundario, titulo } = props.datos;
  const secundario = { backgroundColor: colorSecundario };
  const principal = { borderColor: colorPrimario };

  //Lista de colaboradores
  const { colaboradores } = props;

  return (
    <>
      {colaboradores.length > 0 && (
        <section className="equipo" style={secundario}>
          <h3 style={principal}>{titulo}</h3>
          <div className="colaboradores">
            {colaboradores.map((colaborador, index) => (
              <Colaborador datos={colaborador} key={index} colorPrimario={colorPrimario}/>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Equipo;
