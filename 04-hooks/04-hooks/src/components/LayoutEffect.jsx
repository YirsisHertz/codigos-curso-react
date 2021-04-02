import React, { useState, useLayoutEffect, useEffect } from "react";

const LayoutEffect = () => {
  const [, setData] = useState([]);

  const [length, setLength] = useState(0);

  const newData = [
    {
      name: "Yirsis",
      email: "yirsis@mail.com",
    },
    {
      name: "Yirsis",
      email: "yirsis@mail.com",
    },
    {
      name: "Yirsis",
      email: "yirsis@mail.com",
    },
    {
      name: "Yirsis",
      email: "yirsis@mail.com",
    },
    {
      name: "Yirsis",
      email: "yirsis@mail.com",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setData(newData);
    }, 5000);
  }, [newData]);

  useLayoutEffect(() => {
    setLength();
  }, []);

  return (
    <>
      <h1>useLayoutEffect</h1>
      <hr />
      <p>Valores: {length}</p>
    </>
  );
};

export default LayoutEffect;
