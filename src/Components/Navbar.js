import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <h1>Book Store</h1>
    <ul>
      <li>
        <Link to="/">Books</Link>
      </li>
      <li>
        <Link to="/Categories">Categories</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
