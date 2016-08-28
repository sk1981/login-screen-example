import React from "react";
import "../../style/login/login-page.scss";

const LoginForm = (props) => {
  return (
    <div className="login">
      <div className="login__text">Welcome! Please enter login details.</div>
      <label className="login__label" htmlFor="user-name">
        Username:
        <input placeholder="Enter Username" className="login__input" type="text" id="user-name"/>
      </label>
      <label className="login__label" htmlFor="user-name">
        Password:
        <input placeholder="Enter Password" className="login__input" type="password" id="user-name"/>
      </label>
      <button className="login__submit" type="submit">Login</button>
    </div>
  )
};

export default LoginForm;