import React from "react";

/**
 * Element to display app banner.
 *
 * @param props
 * @returns {XML}
 * @constructor
 */
const AdminDashboard = (props) => {
  return (
    <section className="dashboard dashboard--user">
      <p>{`Welcome '${props.loggedInUser}' to Admin Screen`}</p>
      <p>Here you can manage the app</p>
    </section>
  )
};

export default AdminDashboard;
