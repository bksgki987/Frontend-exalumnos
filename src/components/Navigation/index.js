import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuth, user } = useContext(AuthContext);

  const toggle = () => setIsOpen(!isOpen);

  const publicNavbar = () => {
    console.log(user);
    return (<Navbar
      className="navbar navbar-dark bg-danger"
      // style={{ backgroundColor: "black", color: "red" }}
      expand = "md" >
      <NavbarBrand tag={Link} to="/">Bienvenido Egresado</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/login">Login</NavLink>
          </NavItem>

          <NavItem>
            <NavLink tag={Link} to="/signup">Signup</NavLink>
          </NavItem>

        </Nav>
      </Collapse>
    </Navbar >)
  }

const authNavbar = () => {
  console.log(user);
  return (
    <Navbar
      className="navbar navbar-dark bg-dark"
      // style={{ backgroundColor: "black", color: "red" }}
      expand="md">
      <NavbarBrand tag={Link} to="/">{`¡Bienvenid@ ${user.first_name}!`}</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/logout">Logout</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/users">Usuarios</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>)
}

return (
  <React.Fragment>
    {isAuth ? authNavbar() : publicNavbar()}
  </React.Fragment>
);
}

export default Navigation;