const Saludo = () => {
  const [cuenta, setCuenta] = React.useState(10);

  return <h1>Cuenta: {cuenta}</h1>;
};
