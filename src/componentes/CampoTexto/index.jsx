import "./CampoTexto.css";

const CampoTexto = ({ nombre, placeholder, required }) => {
  return (
    <div className="campo-texto">
      <label htmlFor="">{nombre}</label>
      <input type="text" placeholder={placeholder} required={required} />
    </div>
  );
};

export default CampoTexto;
