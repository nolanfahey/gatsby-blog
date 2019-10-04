import React from 'react';
import { Link } from 'gatsby';

// CSS stylus file
import './css/navbar.styl';

export const Navbar = () => (
  <>
    <nav className="navbar flex-row">
      <div className="name-link" href="#">
        <Link to="/">nolan fahey</Link>
      </div>

      <div className="flex-row link-set">
        <div className="nav-link">
          <Link to="/blog/">blog</Link>
          <div className="blog-bottom bottom-bar" />
        </div>

        <div className="nav-link">
          <Link to="/about/">about</Link>
          <div className="about-bottom bottom-bar" />
        </div>

        <div className="nav-link">
          <Link to="/contact/">contact</Link>
          <div className="contact-bottom bottom-bar" />
        </div>
      </div>
    </nav>
  </>
);