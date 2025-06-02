import React from 'react';
import { Link } from 'react-router-dom';


const SecondaryNavBar = () => {
  return (
    <nav className="secondary-nav">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/sistemaAdmin#home" className="nav-link">BASE DE MAILS</Link>
        </li>
        <li className="nav-item">
          <Link to="/sistemaAdmin#contactos" className="nav-link">POSIBLES CONTACTOS</Link>
        </li>
        <li className="nav-item">
          <Link to="/sistemaAdmin#pacientes" className="nav-link">PACIENTES</Link>
        </li>
      </ul>
    </nav>
  );
};

export default SecondaryNavBar;
