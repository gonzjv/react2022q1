import React from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  render() {
    const ROUTES = [
      { path: '/', name: 'Home' },
      { path: 'about-us', name: 'About Us' },
    ];

    return (
      <header className="header">
        <nav className="navigation">
          {ROUTES.map((route) => (
            <NavLink
              to={route.path}
              key={route.name}
              className={({ isActive }) =>
                isActive ? 'nav-btn-active' : 'nav-btn'
              }
            >
              {route.name}
            </NavLink>
          ))}
        </nav>
      </header>
    );
  }
}

export default Header;
