import React from 'react';
import styles from './Footer.module.css';
import DogLogo from '../../../assets/img/dog.svg?react'

const Footer = () => {

	return (

		<div className={styles.footer}>

			<DogLogo />

			<p>&copy; Dogs Garcia 2026 Todos os direitos reservados.</p>
		</div>
	)
}

export default Footer;
