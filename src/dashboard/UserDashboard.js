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
      {`Welcome user ${props.loggedInUser}`}
    </section>
  )
};

export default UserDashboard;
