import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoimg from "../../imgs/logo.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";

function Navigation() {
  const [expanded, setExpanded] = useState(false);

  const closeNav = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      bg="light"
      expand="lg"
      expanded={expanded}
      className="navbar__gral"
    >
      <Container>
        <Navbar.Brand className="d-flex justify-content-center">
          <Link to={"/"}>
            <img
              src={logoimg}
              alt="logo"
              className="img-fluid navbar__logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="d-flex justify-content-center"
        >
          <Nav
            className="ml-auto d-flex justify-content-center"
            onClick={closeNav}
          >
            <NavDropdown
              title="Padres"
              id="padres-dropdown"
              className="navbar__unit"
              style={{ color: "rgb(140, 82, 255)" }}
            >
              <Link to="/padres" className="navbar__link">
                Padres
              </Link>
              <Link to="/padres/ayuda" className="navbar__link">
                ¿A quién ayudamos?
              </Link>
              <Link to="/padres/proceso" className="navbar__link">
                El Proceso
              </Link>
              <Link to="/padres/encuentro" className="navbar__link">
                Match con el Subrogante
              </Link>
              <Link to="/padres/legal" className="navbar__link">
                Proceso Legal
              </Link>
            </NavDropdown>
            <NavDropdown title="Subrogante" id="subrogante-dropdown" className="navbar__unit">
              <Link to="/subrogante" className="navbar__link">
                Subrogante
              </Link>
              <Link to="/subrogante/proceso" className="navbar__link">
                El proceso de Subrogación
              </Link>
              <Link to="/subrogante/aplicacion" className="navbar__link">
                El proceso de Aplicación
              </Link>
              <Link to="/subrogante/screening" className="navbar__link">
                El proceso de Screening
              </Link>
            </NavDropdown>
            
            <Link to="padres/formulario">
              <Button variant="primary" className="navbar__button">
                Ser padre
              </Button>
            </Link>
            <Link to="/subrogante/formulario">
              <Button variant="primary" className="navbar__button">
                Ser subrogante
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;

