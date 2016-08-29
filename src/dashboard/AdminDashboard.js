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
      <div>{`Welcome admin ${props.loggedInUser}`}</div>
    </section>
  )
};

export default AdminDashboard;
