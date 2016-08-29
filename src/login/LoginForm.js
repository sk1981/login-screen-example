import React from "react";
import {connect} from 'react-redux'
import {createLoginAction} from '../redux/actions';
import "../../style/login/login-page.scss";

/**
 *
 * @type {*|Function}
 */
let LoginForm = React.createClass({

  submitLogin() {
    console.log("submititng", this.loginNode.value, this.passwordNode.value);
    this.props.login(this.loginNode.value, this.passwordNode.value)
  },

  getErrorMessage(props) {
    console.log("error ---", props);
    if(props.error !== undefined) {
      return (
        <div className="login__error">
          {props.error}
        </div>
      )
    }
  },

  render() {
    return (
      <div className="login">
        <div className="login__text">Welcome! Please enter login details.</div>
        <label className="login__label" htmlFor="user-name">
          Username:
          <input ref={node => this.loginNode = node} placeholder="Enter Username" className="login__input" type="text"/>
        </label>
        <label className="login__label" htmlFor="user-name">
          Password:
          <input ref={node => this.passwordNode = node} placeholder="Enter Password" className="login__input"
                 type="password"/>
        </label>
        {this.getErrorMessage(this.props)}
        <button onClick={this.submitLogin} className="login__submit" type="submit">Login</button>
      </div>
    )
  }
});


var mapDispatchToProps = function (dispatch) {
  return {
    login: (username, password) => dispatch(createLoginAction(username, password))
  }
};

LoginForm = connect(undefined, mapDispatchToProps)(LoginForm);

export default LoginForm;
;