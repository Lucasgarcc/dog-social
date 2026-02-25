import React from 'react'
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import{ UserContext } from '../../../contexts/UserContext';
import User from '../../../assets/img/usuario.svg?react'
import Dog from '../../ui/Logo/Dog';

const Header = () => {

	/**
	 * @description  para acessar os dados do usuário no contexto
	 */
	const { data } = React.useContext(UserContext);

	const [ eyeSizeLefth, setEyeSizeLefth ] = React.useState(3);
	const [ eyeSizeRigth, setEyeSizeRigth ] = React.useState(3);


	React.useEffect(() => {
		const blinkInterval = setInterval(() => {
			setEyeSizeLefth(0);

			const openEyesTimeout = setTimeout(() => {
				setEyeSizeLefth(3);
			}, 100);

			return () => clearTimeout(openEyesTimeout);
		}, Math.floor(Math.random() * 3000) + 3000); // Change size every secon
		return () => clearInterval(blinkInterval);
	}, []);


	React.useEffect(() => {
		const blinkInterval = setInterval(() => {
			setEyeSizeRigth(0);

			const openEyesTimeout = setTimeout(() => {
				setEyeSizeRigth(3);
			}, 100);

			return () => clearTimeout(openEyesTimeout);
		}, Math.floor(Math.random() * 4000) + 2000); // Change size every secon
		return () => clearInterval(blinkInterval);
	}, []);


	return (

		<div className={styles.Header}>
	
			<nav className={`${styles.headerNav} container`}>
				<Link className={styles.Logo} to="/"
					aria-label='Dogs - Home'>
					<Dog
						colorEyeL="#111111"
						colorEyeR="#000"
						eyeSizeLefth={eyeSizeLefth} eyeSizeRigth={eyeSizeRigth}
					/>
				</Link>

				{data && data.nome ? (
					<div className={styles.user}>
						<span className={styles.userName}>
							{data.nome}
						</span>
						
						<Link to="/account">
							<User />
						</Link>
						
					</div>
				) : (

					<Link to="/login" className={styles.Login}>
						Login
					</Link>
					
				)}
		
			</nav>
		</div>
	)
}

export default Header;
