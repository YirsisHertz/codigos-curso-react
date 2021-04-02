import { useState } from "react";

const Contador = ({ inicial, factor }) => {
  const [contador, setContador] = useState(inicial);

  const aumentar = () => {
    setContador((actual) => actual + factor);
  };

  const disminuir = () => {
    setContador(contador - factor);
  };

  return (
    <div>
      <h1>Contador: {contador} </h1>
      <hr />

      <button onClick={aumentar}> Aumentar </button>
      <button onClick={disminuir}> Disminuir </button>
    </div>
  );
};

export default Contador;
