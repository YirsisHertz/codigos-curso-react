import React from "react";

const Btn = ({ add }) => {
  console.log("Add se agrego");

  return <button onClick={add}>+1</button>;
};

export default React.memo(Btn);
