import { Component } from "react";
import React from "react";
import { NavLink } from "react-router-dom";
import "../../../style/Style.css";
import Menu from "./Menu";

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="container-Header">
          <div className="Lcolum-6">
            <NavLink to="/Home" activeClassName="active">
              <span>LOGO</span>
            </NavLink>
          </div>
          <Menu />
        </nav>
      </header>
    );
  }
}

export default Header;
