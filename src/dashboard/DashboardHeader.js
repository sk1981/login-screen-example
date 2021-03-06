import React from "react";
import DashboardLogout from "./DashboardLogout";

function generateNav(role) {
  const links = ['Home', 'Contact Us', 'Support'];
  if(role === 'admin') {
    links.push("Admin");
  }

  const navLinks = links.map(linkText => {
    return <li className="dashboard-nav__item" key={linkText}><a className="dashboard-nav__link" href="#">{linkText}</a></li>
  });

  navLinks.push(<li className="dashboard-nav__item" key="logout"><DashboardLogout/> </li>);
  return (
    <nav className="dashboard-nav">
      <ul className="dashboard-nav__list">
        {navLinks}
      </ul>
    </nav>
  )
}

/**
 * Header for dashboards
 *
 * @param props
 * @returns {XML}
 * @constructor
 */
const DashboardHeader = (props) => {
  return (
    <div className="dashboard-header">
      <h2>My Firm</h2>
      {generateNav(props.role)}
    </div>
  )
};

export default DashboardHeader;
