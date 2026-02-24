import React from 'react'
import styles from './Login.module.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm.jsx';
import LoginCreate from './LoginCreate/LoginCreate.jsx';
import LoginPasswordLost from './LoginPasswordLost/LoginPasswordLost.jsx';
import LoginPasswordReset from './LoginPasswordReset/LoginPasswordReset.jsx';
import { UserContext } from '../../contexts/UserContext.jsx';
import NotFoundPage from '../NotFoundPage/NotFoundPage.jsx';

const Login = () => {

	const { login } = React.useContext(UserContext);

	/**
	 * @description Redireciona para a página de conta se o usuário já estiver logado
	 */
	if (login) return <Navigate to='/account' />;
	
	return (
		<section className={styles.loginContainer} >
			<div className={styles.forms}>
				<Routes>
					<Route
						path="/"
						element={<LoginForm />}
					/>
					<Route
						path="/create"
						element={<LoginCreate />}
					/>
					<Route
						path="/password-lost"
						element={<LoginPasswordLost />}
					/>
					<Route
						path="/resetar"
						element={<LoginPasswordReset />}
					/>
					<Route
						path='*'
						element={
							<NotFoundPage />
						}
					/>
				</Routes>
			</div>
		</section>
		
	)
}

export default Login
