import React from "react";
import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./UserDashboard";
import DashboardHeader from "./DashboardHeader";
import "../../style/dashboard/dashboard.scss";


/**
 * Element to display app Dashboard.
 *
 * @param props
 * @returns {XML}
 * @constructor
 */
const Dashboard = (props) => {
  return (
    <div className="dashboard-container">
      <DashboardHeader role={props.role}/>
      {(props.role === 'admin') ? <AdminDashboard {...props}/> : <UserDashboard {...props}/>}
    </div>
  )
};

export default Dashboard;
