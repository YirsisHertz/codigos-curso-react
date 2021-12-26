import React, { useContext } from "react";
import { Navigate } from "react-router";

import { AuthContext } from "../context/AuthContext";

const PrivateRouter = ({ children }) => {
  const { log } = useContext(AuthContext);

  return log.log ? children : <Navigate to="/login" />;
};

export default PrivateRouter;
