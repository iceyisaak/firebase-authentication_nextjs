import React from 'react';
import Link from 'next/link';

import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <Link href='/' passHref>
        <h1>
          Test Firebase Auth
        </h1>
      </Link>
    </nav>
  );
};

export default Navbar;