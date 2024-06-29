import React from "react";
import { Nav, NavLink, NavMenu } from "./NavBarElements";

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/index">Home</NavLink>
          <NavLink to="/RSVP">RSVP</NavLink>
          <NavLink to="/details">Details</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default NavBar;
