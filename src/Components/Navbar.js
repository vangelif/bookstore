import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <a className="nav-logo" href="#/">
      Book Store CMS
    </a>
    <ul>
      <li>
        <Link to="/">Books</Link>
      </li>
      <li>
        <Link to="/Categories">Categories</Link>
      </li>
    </ul>
    <span>
      person
      <i className="fas fa-user-alt" />
    </span>
  </nav>
);

export default Navbar;
