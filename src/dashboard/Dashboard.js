import React from "react";
import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./UserDashboard";

/**
 * Element to display app banner.
 *
 * @param props
 * @returns {XML}
 * @constructor
 */
const Dashboard = (props) => {
  return (props.role === 'admin') ? <AdminDashboard {...props}/> : <UserDashboard {...props}/>;
};

export default Dashboard;
