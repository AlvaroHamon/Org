import "./Campo.css";

const Campo = (props) => {
  const {
    nombre,
    placeholder,
    required,
    valor,
    actualizarValor,
    type = "text",
  } = props;

  const manejarCambio = (e) => {
    actualizarValor(e.target.value);
  };
  return (
    <div className={`campo campo-${type}`}>
      <label htmlFor="">{nombre}</label>
      <input
        placeholder={placeholder}
        required={required}
        value={valor}
        onChange={manejarCambio}
        type={type}
      />
    </div>
  );
};

export default Campo;
