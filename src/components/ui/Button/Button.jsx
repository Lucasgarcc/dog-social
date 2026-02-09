import React from 'react'
import styles from './Button.module.css';

const Button = ({ 
    label, 
    onClick, 
    disabled, 
    type, 
    className, 
	color,
    hoverColor ,
	focusColor
  }) => {
  return (

    <button
      className={`${styles.button} ${className || ''}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
	  style={{
		'--btn-color': `var(${color})`,
		'--btn-hover': `var(${hoverColor})`,
		'--btn-focus': `var(${focusColor})`,
	  }}
    >
      {label}
    </button>
  )
}

export default Button
