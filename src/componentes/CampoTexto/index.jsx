import { useState } from "react";
import "./CampoTexto.css";

const CampoTexto = ({ nombre, placeholder, required, valor, actualizarValor }) => {
  const [valores, actualizarValores] = useState("");

  const manejarCambio = (e)=>{
    actualizarValor(e.target.value)
  }
  return (
    <div className="campo-texto">
      <label htmlFor="">{nombre}</label>
      <input
        type="text"
        placeholder={placeholder}
        required={required}
        value={valor}
        onChange={manejarCambio}
      />
    </div>
  );
};

export default CampoTexto;
