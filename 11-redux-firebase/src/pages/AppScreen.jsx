import React from "react";
import { useSelector } from "react-redux";
import Element from "../components/Element";
import FormAdd from "../components/FormAdd";

import Navbar from "../components/Navbar";

const AppScreen = () => {
  const name = useSelector((state) => state.auth.displayName);

  const data = useSelector((state) => state.nomina.data);

  return (
    <>
      <Navbar />

      <div className="container animate__animated animate__backInUp">
        <h1 className="center">Hola {name}</h1>
        <hr />

        <FormAdd />

        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Cantidad</th>
              <th>Borrar</th>
            </tr>
          </thead>

          <tbody>
            {data.map((elemento) => {
              return (
                <tr
                  className="animate__animated animate__fadeInUp "
                  key={elemento.id}
                >
                  <Element data={elemento} />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AppScreen;
