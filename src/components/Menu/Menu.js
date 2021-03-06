import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
const menus = [
  {
    name: "Home Page",
    to: "/",
    exact: true
  },
  {
    name: "Product Manager",
    to: "/product-list",
    exact: false
  },
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? "active" : "";
        return (
          <li className={active}>
            <Link to={to}>
              {label}
            </Link>
          </li>
        );
      }}
    />
  );
};

class Menu extends Component {
  render() {
    return (
      <Router>
        <div className="navbar navbar-default">
          <Link to="" className="navbar-brand" href="#">Call API</Link>
          <ul className="nav navbar-nav">
            {this.showMenus(menus)}
          </ul>
        </div>
      </Router>
    );
  }

  showMenus = (menus) => {
    var result = null;
    if(menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.name}
            to={menu.to}
            activeOnlyWhenExact={menu.exact}
          />
        );
      });
    }
    return result;
  }
}

export default Menu;
