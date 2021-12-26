import React from "react";
import { Redirect, Route } from "react-router";

const PublicRouter = ({ log, component: Component, ...resto }) => {
  return (
    <Route
      {...resto}
      component={(props) =>
        log ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRouter;
