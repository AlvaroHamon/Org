import { useState } from "react";
import "./MiOrg.css";

const MiOrg = () => {
  //Estado - hooks
  //useState
  const [nombre, actualizarNombre] = useState("Alvaro");

  const manejarClick = () => {
    console.log("Mostrar/Ocultar elemento");
  };
  return (
    <section className="orgSection">
      <h3 className="tittle">Mi Organización</h3>
      <img src="./img/add.png" alt="add" onClick={manejarClick} />
    </section>
  );
};

export default MiOrg;
