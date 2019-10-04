import React from 'react';
import './navbar.styl';

export const Navbar = () => (
  <>
    <nav className="navbar flex-row">
      <a className="navbar-link name-link navbar-item" href="#">
        <h1>nolan fahey</h1>
      </a>
      <div className="flex-row icon-set">
        <a className="icon-link" href="a">
          a
        </a>
        <a className="icon-link" href="b">
          b
        </a>
        <a className="icon-link" href="c">
          c
        </a>
      </div>
    </nav>
  </>
);
