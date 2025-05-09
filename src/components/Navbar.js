import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">Zomato Clone</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink exact="true" to="/" className="nav-link" activeclassname="active">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/restaurants" className="nav-link" activeclassname="active">Restaurants</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/login" className="nav-link btn btn-outline-light ms-2 px-3 py-1" activeclassname="active">
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
