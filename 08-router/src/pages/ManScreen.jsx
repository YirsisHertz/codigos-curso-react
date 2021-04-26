import React from "react";
import Card from "../components/Card";
import { Characters } from "../models/Characters";

const ManScreen = () => {
  const mans = Characters.filter((character) => character.type === "h");

  return (
    <div className="container mt-3">
      <h1>Mans Screen</h1>
      <hr />
      <div className="row">
        {mans.map((man) => (
          <Card key={man.id} {...man} />
        ))}
      </div>
    </div>
  );
};

export default ManScreen;
