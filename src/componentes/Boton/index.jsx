import "./Boton.css";

const Boton = ({nombre}) => {
  return (
    <div className="btn">
      <button>{nombre}</button>
    </div>
  );
};

export default Boton;
