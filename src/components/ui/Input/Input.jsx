import React from 'react'
import styles from './Input.module.css';

const Input = ({
		
		label,	
		name, 
		type,
	 	value, 
		placeholder, 
		onChange,
		error,
		onBlur
	
	}) => {
	
	return (

		<div className={styles.wrapper}>
			<label htmlFor={name}> 
				{label}
			</label>

			<input
				id={name}
				className={styles.input}
				name={name}
				type={type}
				value={value}
				placeholder={placeholder}
				onChange={onChange}
				onBlur={onBlur}
			/>
			{error &&
				<span className={styles.error}>
					{error}
				</span> 
			}
		</div>

	)
}

export default Input;
