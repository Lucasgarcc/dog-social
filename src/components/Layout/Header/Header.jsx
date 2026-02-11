import React from 'react'
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/img/dog.svg?react';
import{ UserContext } from '../../../contexts/UserContext';
import Button from '../../ui/Button/Button';
const Header = () => {

	/**
	 * @description  para acessar os dados do usuário no contexto
	 */
	const { data, userLogout, navigate } = React.useContext(UserContext);

	/**
	 * @description Função de sair
	 */
	const logout = () => {
		userLogout();
		navigate('/login');
	}

	return (

		<div className={styles.Header}>
	
			<nav className={`${styles.headerNav} container`}>
				<Link className={styles.Logo} to="/"
					aria-label='Dogs - Home'>
					<Logo />
				</Link>

				{data && data.nome ? (
					<div className={styles.user}>
						<span className={styles.userName}>
							{data.nome}
						</span>

						<Button
							onClick={logout}
							color='--color-danger'
							hoverColor='--color-danger-hover'
							focusColor='-color-danger-focus'
							label='sair'
							type={'button'}
						>
							Sair
						</Button>
					</div>
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
