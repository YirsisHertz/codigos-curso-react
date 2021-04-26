import React from "react";
import { Redirect, Route } from "react-router";

const PublicRouter = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        !auth.log ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PublicRouter;
