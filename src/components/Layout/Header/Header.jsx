import React from 'react'
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import  Logo from '../../../assets/img/dog.svg?react';

const Header = () => {
  return (
    <div className={styles.Header}>
   
      <nav className={`${styles.headerNav} container`}>
        <Link className={styles.Logo} to="/"  
        aria-label='Dogs - Home'> 
            <Logo  />
          </Link>
      
        <Link to="/login" className={styles.Login}>
          Login / Criar
        </Link>
      </nav>
    </div>
  )
}

export default Header;
