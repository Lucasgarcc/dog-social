import React from 'react'
import styles from './Button.module.css';

const Button = ({ label, onClick, disabled, type }) => {
  return (
 
      <button 
          className={styles.Button}
          onClick={onClick} 
          type={type} 
          disabled={disabled}
        >
        {label}
      </button>
  )
}

export default Button
