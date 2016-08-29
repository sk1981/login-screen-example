import React from "react";

function generateNav() {
  const navLinks = ["Home", "Contact Us", "Support"].map(linkText => {
    return <li className="dashboard-nav__item" key={linkText}><a className="dashboard-nav__link" href="#">{linkText}</a></li>
  });
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
      {generateNav()}
    </div>
  )
};

export default DashboardHeader;
