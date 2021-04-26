import React from "react";
import Card from "../components/Card";
import { Characters } from "../models/Characters";

const WomanScreen = () => {
  const womans = Characters.filter((character) => character.type === "m");

  return (
    <div className="container mt-3">
      <h1>Womans Screen</h1>
      <hr />
      <div className="row">
        {womans.map((woman) => (
          <Card key={woman.id} {...woman} />
        ))}
      </div>
    </div>
  );
};

export default WomanScreen;
