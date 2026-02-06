import React from 'react'
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/img/dog.svg?react';

import{ UserContext } from '../../../contexts/UserContext';

const Header = () => {

	/**
	 * @description  para acessar os dados do usuário no contexto
	 */
	const { data, logout } = React.useContext(UserContext);

	return (
		<div className={styles.Header}>

			<nav className={`${styles.headerNav} container`}>
				<Link className={styles.Logo} to="/"
					aria-label='Dogs - Home'>
					<Logo />
				</Link>

				{data && data.nome ? (
					<button onClick={logout} className={styles.Logout}>
						Sair
					</button>
				) : (
					<Link to="/login" className={styles.Login}>
						Login / Criar
					</Link>
				)}
		
			</nav>
		</div>
	)
}

export default Header;
