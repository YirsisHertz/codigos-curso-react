const Contador = () => {
  const [cuenta, setCuenta] = React.useState(3);

  const aumentar = () => setCuenta(cuenta + 1);
  const disminuir = () => setCuenta(cuenta - 1);

  return (
    <>
      <h1 className={cuenta <= 0 ? "negativo" : "positivo"}>
        Contador: {cuenta}
      </h1>
      <hr />
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={disminuir}>Disminuir</button>
    </>
  );
};
