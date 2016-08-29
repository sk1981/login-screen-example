import React from "react";
import LoginPage from "./login/LoginPage";
import Dashboard from "./dashboard/Dashboard";

/**
 * Element to display app banner.
 *
 * @param props
 * @returns {XML}
 * @constructor
 */
const Container = (props) => {
  return (
    <main className="container">
      {props.loggedInUser == undefined ?
         <LoginPage error={props.error}/>:
         <Dashboard role={props.role} loggedInUser={props.loggedInUser}/>
      }
    </main>
  )
};

export default Container;
