import { useState } from "react";
import "./MiOrg.css";

const MiOrg = (props) => {
  //Estado - hooks
  //useState
  //const [nombreVariable, funcionActulizar] = useState(valor inicial)

  // const [mostrar, actualizarMostrar] = useState(true);
  // const manejarClick = () => {
  //   console.log("Mostrar/Ocultar elemento");
  //   actualizarMostrar(!mostrar);
  // };
  return (
    <section className="orgSection">
      <h3 className="tittle">Mi Organización</h3>
      <img src="./img/add.png" alt="add" onClick={props.cambiarMostrar} />
    </section>
  );
};

export default MiOrg;
