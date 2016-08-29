import React from "react";
import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./UserDashboard";
import DashboardHeader from "./DashboardHeader";
import "../../style/dashboard/header.scss";


/**
 * Element to display app banner.
 *
 * @param props
 * @returns {XML}
 * @constructor
 */
const Dashboard = (props) => {
  return (
    <div className="dashboard-container">
      <DashboardHeader/>
      {(props.role === 'admin') ? <AdminDashboard {...props}/> : <UserDashboard {...props}/>}
    </div>
  )
};

export default Dashboard;
