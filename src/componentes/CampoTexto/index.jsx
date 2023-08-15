import "./CampoTexto.css";

const CampoTexto = ({ nombre, placeholder }) => {
  return (
    <div className="campo-texto">
      <label htmlFor="">{nombre}</label>
      <input type="text" placeholder={placeholder} />
    </div>
  );
};

export default CampoTexto;
