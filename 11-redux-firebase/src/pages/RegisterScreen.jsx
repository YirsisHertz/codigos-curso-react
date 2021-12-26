import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { register } from "../actions/auth";

const RegisterScreen = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: "",
    password: "",
    password2: "",
    username: "",
  });

  const { email, username, password, password2 } = data;

  const handleChange = (e) => {
    const value = e.target.value;

    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (email.trim() === "" || !email.trim().includes("@")) {
      return;
    }

    if (username.trim().length < 2) {
      return;
    }

    if (password.trim().length < 6) {
      return;
    } else {
      if (password.trim() !== password2.trim()) {
        return;
      }
    }

    dispatch(register(email, password, username));
  };

  return (
    <div className="container animate__animated animate__zoomIn">
      <h3>Register</h3>
      <hr />

      <div className="row container">
        <form onSubmit={handleRegister} className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">email</i>
              <input
                onChange={handleChange}
                value={email}
                id="icon_prefix1"
                className="materialize-textarea"
                type="email"
                name="email"
              />
              <label htmlFor="icon_prefix1">Email</label>
            </div>
            <div className="input-field col s12">
              <i className="material-icons prefix">assignment_ind</i>
              <input
                onChange={handleChange}
                value={username}
                id="icon_prefix2"
                className="materialize-textarea"
                name="username"
                type="text"
              />
              <label htmlFor="icon_prefix2">Username</label>
            </div>
            <div className="input-field col s12">
              <i className="material-icons prefix">vpn_key</i>
              <input
                onChange={handleChange}
                value={password}
                id="icon_prefix3"
                className="materialize-textarea"
                name="password"
                type="password"
              />
              <label htmlFor="icon_prefix3">Password</label>
            </div>
            <div className="input-field col s12">
              <i className="material-icons prefix">vpn_key</i>
              <input
                onChange={handleChange}
                value={password2}
                id="icon_prefix4"
                className="materialize-textarea"
                name="password2"
                type="password"
              />
              <label htmlFor="icon_prefix4">Confirm Password</label>
            </div>
          </div>

          <button className="btn waves-effect waves-light" type="submit">
            Enviar
          </button>
          <hr />
          <Link to="/auth/login">Login into account</Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterScreen;
