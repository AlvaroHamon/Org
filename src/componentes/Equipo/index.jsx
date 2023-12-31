import hexToRgba from "hex-to-rgba";
import Colaborador from "../Colaborador";
import "./Equipo.css";

const Equipo = (props) => {
  //props para el estilo CSS
  const { colorPrimario, titulo, id } = props.datos;
  const secundario = { backgroundColor: hexToRgba(colorPrimario, "0.6") };
  const estiloTexto = { borderColor: colorPrimario };

  //Lista de colaboradores
  const { colaboradores, eliminarColaborador, actualizarColor, like } = props;

  return (
    <>
      {colaboradores.length > 0 && (
        <section className="equipo" style={secundario}>
          <input
            type="color"
            className="input-color"
            value={hexToRgba(colorPrimario, "0.6")}
            onChange={(evento) => {
              actualizarColor(evento.target.value, id);
            }}
          />
          <h3 style={estiloTexto}>{titulo}</h3>
          <div className="colaboradores">
            {colaboradores.map((colaborador, index) => (
              <Colaborador
                datos={colaborador}
                key={index}
                colorPrimario={colorPrimario}
                eliminarColaborador={eliminarColaborador}
                like={like}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Equipo;
