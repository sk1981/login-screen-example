import React from "react";
import LoginForm from "./LoginForm";
import Banner from "../banner/Banner";

/**
 * Element to display app banner.
 *
 * @param props
 * @returns {XML}
 * @constructor
 */
const LoginPage = (props) => {
  return (
    <div>
      <Banner/>
      <LoginForm {...props}>
      </LoginForm>
    </div>
  )
};

export default LoginPage;
