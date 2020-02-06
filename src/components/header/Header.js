import React from 'react';
import styles from './Header.css';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className={styles.Header}>
    <h1>Arny</h1>
    <nav>
      <Link to="/">Home</Link>
    </nav>
  </header>
);

export default Header;
