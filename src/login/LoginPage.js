import React from "react";
import LoginForm from "./LoginForm";
import Banner from "../banner/Banner";
import '../../style/front-page.scss'

/**
 * Element to display app banner.
 *
 * @param props
 * @returns {XML}
 * @constructor
 */
const LoginPage = (props) => {
  return (
    <div className="front-page">
      <Banner/>
      <LoginForm {...props}>
      </LoginForm>
    </div>
  )
};

export default LoginPage;
