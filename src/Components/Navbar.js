import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

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
      <FaUserAlt className="person-icon" />
    </span>
  </nav>
);

export default Navbar;
