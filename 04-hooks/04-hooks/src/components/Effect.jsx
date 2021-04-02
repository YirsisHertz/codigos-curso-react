import { useEffect, useState } from "react";

const Effect = () => {
  const [state, setState] = useState(0);

  const evento = (e) => {
    console.log("moviendo");
  };

  useEffect(() => {
    if (state === "123") {
      window.addEventListener("mousemove", evento);
    }

    return () => {
      console.log("detenido");
      window.removeEventListener("mousemove", evento);
    };
  }, [state]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1>useEffect</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Search
          </label>
          <input
            onChange={(e) => setState(e.target.value)}
            value={state}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Effect;
