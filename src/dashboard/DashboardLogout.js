import React from "react";
import {createLogoutAction} from '../redux/actions';
import {connect} from 'react-redux'

let DashboardLogout = React.createClass({
  render() {
    return (
      <button onClick={this.props.logout} className="dashboard-nav__button">
        Logout
      </button>
    )
  }
});

var mapDispatchToProps = function (dispatch) {
  return {
    logout: () => dispatch(createLogoutAction())
  }
};

DashboardLogout = connect(undefined, mapDispatchToProps)(DashboardLogout);

export default DashboardLogout;