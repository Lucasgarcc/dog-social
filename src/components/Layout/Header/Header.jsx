import React from 'react'
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/img/dog.svg?react';

import{ UserContext } from '../../../contexts/UserContext';

const Header = () => {

	/**
	 * @description  para acessar os dados do usuário no contexto
	 */
	const { data } = React.useContext(UserContext);

	return (
		<div className={styles.Header}>

			<nav className={`${styles.headerNav} container`}>
				<Link className={styles.Logo} to="/"
					aria-label='Dogs - Home'>
					<Logo />
				</Link>

				<Link 
				 	to={ data ? '/login' : '/account' } 
					className={styles.Login}>
					{data && data.nome ? `Olá  ${data.nome}` : 'Login / Criar'}
				</Link>
			</nav>
		</div>
	)
}

export default Header;
