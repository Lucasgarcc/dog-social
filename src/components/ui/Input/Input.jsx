import React from 'react'
import styles from './Input.module.css';

const Input = ({

		name, 
		type,
	 	value, 
		placeholder, 
		onChange
	
	}) => {
	
	return (

		<input
			className={styles.Input}
			name={name}
			type={type}
			value={value}
			placeholder={placeholder}
			onChange={onChange}
		/>

	)
}

export default Input;
