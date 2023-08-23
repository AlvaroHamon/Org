import "./Boton.css";

const Boton = ({nombre}) => {
  return (
    <div>
      <button className="btn">{nombre}</button>
    </div>
  );
};

export default Boton;
