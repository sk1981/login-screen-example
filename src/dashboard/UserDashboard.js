import React from "react";

/**
 * Element to display app banner.
 *
 * @param props
 * @returns {XML}
 * @constructor
 */
const UserDashboard = (props) => {
  return (
    <section className="dashboard dashboard--user">
      <p>{`Welcome '${props.loggedInUser}' to User Screen.`}</p>
      <p>Here you can use the app as you like</p>
    </section>
  )
};

export default UserDashboard;
